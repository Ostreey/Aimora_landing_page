
const features = [
    {
        title: 'Inbuilt battery charge with USB C',
        description: 'Convenient and fast charging with modern USB C port.',
        icon: (
            <svg className="icon w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" fill="#1A1A1A" stroke="#00B2E3" /><rect x="19" y="10" width="2" height="4" rx="1" fill="#00B2E3" /></svg>
        ),
    },
    {
        title: 'Hardware & mobile app software update',
        description: 'Stay up-to-date with the latest features and improvements.',
        icon: (
            <svg className="icon w-8 h-8 mb-2" fill="none" stroke="#00B2E3" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v4m0 8v4m8-8h-4m-8 0H4" stroke="#00B2E3" /><circle cx="12" cy="12" r="8" stroke="#00B2E3" /></svg>
        ),
    },
    {
        title: 'Dedicated mobile app',
        description: 'Control and monitor your device with our intuitive app.',
        icon: (
            <svg className="icon w-8 h-8 mb-2" fill="none" stroke="#00B2E3" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" stroke="#00B2E3" /><circle cx="12" cy="18" r="1" fill="#00B2E3" /></svg>
        ),
    },
    {
        title: 'Magnetic mounting',
        description: 'Effortless and secure installation with strong magnets.',
        icon: (
            <svg className="icon w-8 h-8 mb-2" fill="none" stroke="#00B2E3" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="8" rx="4" stroke="#00B2E3" /><circle cx="8" cy="12" r="2" fill="#00B2E3" /><circle cx="16" cy="12" r="2" fill="#00B2E3" /></svg>
        ),
    },
    {
        title: 'Flexible enclosure bulletproof',
        description: 'Durable, flexible, and bulletproof enclosure for safety.',
        icon: (
            <svg className="icon w-8 h-8 mb-2" fill="none" stroke="#00B2E3" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="4" stroke="#00B2E3" /><path d="M7 7l10 10" stroke="#00B2E3" /></svg>
        ),
    },
];

const FeatureSectionExample1 = () => (
    <section className="bg-gradient-to-br from-[#1A1A1A] to-black py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-8 underline decoration-[#00B2E3] decoration-2 underline-offset-4">Product Features</h2>
        <div className="flex flex-wrap gap-6 justify-center">
            {features.map((feature, idx) => (
                <div key={idx} className="card bg-[#181A1B] p-6 rounded-lg flex flex-col items-center w-64 shadow-lg">
                    {feature.icon}
                    <h3 className="title text-lg font-semibold text-[#00B2E3] mb-2 text-center">{feature.title}</h3>
                    <p className="description text-sm text-white text-opacity-75 text-center">{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default FeatureSectionExample1; 