import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { X, Upload } from 'lucide-react';

interface TestimonialFormProps {
    onClose: () => void;
    onSuccess: () => void;
    initialData?: any;
}

export default function TestimonialForm({ onClose, onSuccess, initialData }: TestimonialFormProps) {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'en' | 'uz' | 'ru'>('en');
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        quote_en: '',
        quote_uz: '',
        quote_ru: '',
        is_alumni: false
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    // Load initial data
    React.useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                role: initialData.role || '',
                quote_en: initialData.quote_en || initialData.quote || '',
                quote_uz: initialData.quote_uz || '',
                quote_ru: initialData.quote_ru || '',
                is_alumni: initialData.is_alumni || false
            });
        }
    }, [initialData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = initialData?.image_url || '';

            // 1. Upload Image (only if new file)
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const { error: uploadError } = await supabase.storage
                    .from('Images')
                    .upload(`testimonials/${fileName}`, imageFile);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('Images')
                    .getPublicUrl(`testimonials/${fileName}`);

                imageUrl = publicUrl;
            }

            // 2. Insert or Update Data
            const payload = {
                ...formData,
                quote: formData.quote_en || formData.quote_uz || formData.quote_ru,
                image_url: imageUrl
            };

            if (initialData?.id) {
                const { error: updateError } = await supabase
                    .from('testimonials')
                    .update(payload)
                    .eq('id', initialData.id);
                if (updateError) throw updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('testimonials')
                    .insert([payload]);
                if (insertError) throw insertError;
            }

            onSuccess();
            onClose();
        } catch (error) {
            alert('Error saving testimonial: ' + (error as any).message);
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
                    <h3 className="text-xl font-bold dark:text-white">{initialData ? 'Edit Testimonial' : 'Add Testimonial'}</h3>
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

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Student Name</label>
                        <input
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Role / University</label>
                        <input
                            placeholder="e.g. Student at Harvard"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.role}
                            onChange={e => setFormData({ ...formData, role: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            Quote ({activeTab.toUpperCase()})
                        </label>
                        <textarea
                            required={activeTab === 'en'}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData[`quote_${activeTab}` as keyof typeof formData] as string}
                            onChange={e => setFormData({ ...formData, [`quote_${activeTab}`]: e.target.value })}
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            checked={formData.is_alumni}
                            onChange={e => setFormData({ ...formData, is_alumni: e.target.checked })}
                        />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Is Alumni? (Shows in Alumni Network)</label>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Profile Image</label>
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
                            {loading ? 'Saving...' : initialData ? 'Update Testimonial' : 'Add Testimonial'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
