let project_folder = 'build'
let source_folder = 'src'

let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        fonts: project_folder + '/fonts/',
    },
    src: {
        html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
        css: source_folder + '/scss/style.scss',
        js: source_folder + '/js/scripts.js',
        img: source_folder + '/img/**/*.+(png|jpg|jpeg|ico|svg|webp)',
        fonts: source_folder + '/fonts/*',
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + ['/scss/**/*.scss'],
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.+(png|jpg|jpeg|ico|svg|webp)',
        fonts: source_folder + '/fonts/*',
    },
    clean: './' + project_folder + '/',
}
