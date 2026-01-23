export default function StatsSection() {
 return (
     <section className="py-12 md:py-20">
         <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
             <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                 <h2 className="text-4xl font-medium lg:text-5xl">Project/CMA Reports in numbers</h2>
                 <p>Project/CMA Reports are now easier than ever. Perfect for Mudra | PMEGP | MSME | Business Loans</p>
             </div>

             <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                 <div className="space-y-4">
                     <div className="text-5xl font-bold">100+</div>
                     <p>Project Reports Created</p>
                 </div>
                 <div className="space-y-4">
                     <div className="text-5xl font-bold">50+</div>
                     <p>CMA Reports Created</p>
                 </div>
                 <div className="space-y-4">
                     <div className="text-5xl font-bold">1000+</div>
                     <p>Bank-Ready Reports</p>
                 </div>
             </div>
         </div>
     </section>
 )
}