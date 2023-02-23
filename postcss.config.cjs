module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-preset-env')({
            stage: 1,
            autoprefixer: {
                grid: true,
            },
        }),
    ],
};