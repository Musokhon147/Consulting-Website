import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { X, Upload } from 'lucide-react';

interface CourseFormProps {
    onClose: () => void;
    onSuccess: () => void;
    initialData?: any;
}

export default function CourseForm({ onClose, onSuccess, initialData }: CourseFormProps) {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'en' | 'uz' | 'ru'>('en');
    const [formData, setFormData] = useState({
        title_en: '',
        title_uz: '',
        title_ru: '',
        description_en: '',
        description_uz: '',
        description_ru: '',
        duration: '',
        level: '',
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    // Load initial data if editing
    React.useEffect(() => {
        if (initialData) {
            setFormData({
                title_en: initialData.title_en || initialData.title || '',
                title_uz: initialData.title_uz || '',
                title_ru: initialData.title_ru || '',
                description_en: initialData.description_en || initialData.description || '',
                description_uz: initialData.description_uz || '',
                description_ru: initialData.description_ru || '',
                duration: initialData.duration || '',
                level: initialData.level || '',
            });
        }
    }, [initialData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = initialData?.image_url || '';

            // 1. Upload Image (only if new file selected)
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const { error: uploadError } = await supabase.storage
                    .from('Images')
                    .upload(`courses/${fileName}`, imageFile);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('Images')
                    .getPublicUrl(`courses/${fileName}`);

                imageUrl = publicUrl;
            }

            // 2. Insert or Update Data
            // We keep "title" and "description" columns for backwards compatibility or fallback
            const payload = {
                ...formData,
                title: formData.title_en || formData.title_uz || formData.title_ru,
                description: formData.description_en || formData.description_uz || formData.description_ru,
                image_url: imageUrl
            };

            if (initialData?.id) {
                const { error: updateError } = await supabase
                    .from('courses')
                    .update(payload)
                    .eq('id', initialData.id);
                if (updateError) throw updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('courses')
                    .insert([payload]);
                if (insertError) throw insertError;
            }

            onSuccess();
            onClose();
        } catch (error) {
            alert('Error saving course: ' + (error as any).message);
        } finally {
            setLoading(false);
        }
    };

    const TabButton = ({ lang, label }: { lang: 'en' | 'uz' | 'ru', label: string }) => (
        <button
            type="button"
            onClick={() => setActiveTab(lang)}
            className={`flex-1 py-2 text-sm font-bold border-b-2 transition-all ${activeTab === lang
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
        >
            {label}
        </button>
    );

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh]">
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold dark:text-white">{initialData ? 'Edit Course' : 'Add New Course'}</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                        <X size={20} className="dark:text-white" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto">
                    {/* Language Tabs */}
                    <div className="flex border-b border-gray-100 dark:border-gray-700 gap-2 mb-4">
                        <TabButton lang="en" label="English" />
                        <TabButton lang="uz" label="O'zbekcha" />
                        <TabButton lang="ru" label="Русский" />
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                Course Title ({activeTab.toUpperCase()})
                            </label>
                            <input
                                required={activeTab === 'en'}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                value={formData[`title_${activeTab}` as keyof typeof formData]}
                                onChange={e => setFormData({ ...formData, [`title_${activeTab}`]: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                Description ({activeTab.toUpperCase()})
                            </label>
                            <textarea
                                required={activeTab === 'en'}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                value={formData[`description_${activeTab}` as keyof typeof formData]}
                                onChange={e => setFormData({ ...formData, [`description_${activeTab}`]: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Duration</label>
                            <input
                                placeholder="e.g. 12 Weeks"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                value={formData.duration}
                                onChange={e => setFormData({ ...formData, duration: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Level</label>
                            <select
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                value={formData.level}
                                onChange={e => setFormData({ ...formData, level: e.target.value })}
                            >
                                <option value="">Select Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Course Image</label>
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer relative">
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={e => setImageFile(e.target.files?.[0] || null)}
                            />
                            <div className="flex flex-col items-center">
                                <Upload className="text-gray-400 mb-2" />
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {imageFile ? imageFile.name : initialData?.image_url ? 'Change Image' : 'Click to upload image'}
                                </p>
                                {initialData?.image_url && !imageFile && (
                                    <img src={initialData.image_url} alt="Current" className="h-16 w-16 object-cover rounded-md mt-2" />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : initialData ? 'Update Course' : 'Create Course'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
