
interface FormatterFunction {
    (config: FormatterConfig): string
}
declare var formatter:FormatterFunction
export default formatter

interface FormatterConfig {

    /** 
     * JavaScript input source to format 
     * */
    source: string

    /**  */
    mode: string//FormatterMode

    /**  */
    style: string//FormatterStyle

    // /** 
    //  * alternatively to style a custom .eslintrc file can be provided as input in which case users are responsible of installing all its dependencies. 
    //  * */
    // eslintPath: string

    // /** 
    //  * print additional debug information 
    //  * */
    // debug: string
}


// declare enum FormatterStyle {
//     AIRBNB = 'airbnb',
//     ESLINT = 'eslint',
//     FBJS = 'fbjs',
//     GOOGLE = 'google',
//     HAPI = 'hapi',
//     MDCS = 'mdcs',
//     SHOPPIFY = 'shoppify',
//     STANDARD = 'standard',
//     WALMART = 'walmart'
// }

// declare enum FormatterMode {
//     DEFAULT = 'default',
//     DEFAULT_ES5 = 'default_es5',
//     ONLY_ESLINT_FIX = 'onlyEslintFix',
// }
