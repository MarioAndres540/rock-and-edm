const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css (done){
    src('src/scss/**/*.scss') //Indentificar el arvhico de SASS
        .pipe( plumber() )
        .pipe( sass() ) // Compilarlo
        .pipe(dest("build/css")) // Almacenarla en el disco duro
     
    done();// callback que avisa a guloo cuando llegamos al final
}

function dev( done ) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;// llamar tarea en npx gulp tarea -npm run run tarea
exports.dev = dev;
