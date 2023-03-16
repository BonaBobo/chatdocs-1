/** @type {import('tailwindcss').Config} */
module.exports = {
        content: ['./src/**/*.{html,svelte,ts,js}'],
        theme: {
                daisyui: {
                        themes: [
                                {
                                        mytheme: {
                                                primary: '#fff496',
                                                secondary: '#c9ac0a',
                                                accent: '#9967fc',
                                                neutral: '#2B2735',
                                                'base-100': '#FFFFFF',
                                                info: '#82B7F7',
                                                success: '#126E34',
                                                warning: '#986B10',
                                                error: '#E0384C'
                                        }
                                }
                        ]
                },
                extend: {}
        },
        plugins: [require('daisyui')]
};