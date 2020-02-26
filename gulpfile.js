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
let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin')

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/',
        },
        port: 3000,
        notify: false,
    })
}


// HTML
function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.reload({ stream: true }))
}

// Images
function images() {
    return src(path.src.img).pipe(dest(path.build.img)).pipe(browsersync.stream())
}

// Fonts
function fonts() {
    return src(path.src.fonts).pipe(dest(path.build.fonts)).pipe(browsersync.stream())
}

// Images Compress
function img() {
    return src(path.src.img)
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
                }),
            ]),
        )
        .pipe(dest(path.build.img))
}
