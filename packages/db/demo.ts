import * as dotenv from 'dotenv'
dotenv.config()
import prisma from './index'

async function main() {
    console.log('🚀 Connecting to Supabase via Prisma...')

    // 1. Fetch site settings
    const settings = await prisma.site_settings.findUnique({
        where: { id: BigInt(1) }
    })

    console.log('\n--- Site Settings ---')
    console.log(`Site Name: ${settings?.site_name}`)
    console.log(`Primary Color: ${settings?.primary_color}`)
    console.log(`Font: ${settings?.font_family}`)

    // 2. Count courses
    const courseCount = await prisma.courses.count()
    console.log(`\n📚 Total Courses: ${courseCount}`)

    // 3. Fetch latest 3 testimonials
    const latestTestimonials = await prisma.testimonials.findMany({
        take: 3,
        orderBy: { created_at: 'desc' }
    })

    console.log('\n--- Latest Testimonials ---')
    latestTestimonials.forEach(t => {
        console.log(`- ${t.name}: "${t.quote?.substring(0, 30)}..."`)
    })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
