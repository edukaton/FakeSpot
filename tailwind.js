/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// var defaultConfig = require('tailwindcss').defaultConfig()

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

// var colors = {
//   'transparent': 'transparent',
//
//   'black': '#222b2f',
//   'grey-darkest': '#364349',
//   'grey-darker': '#596a73',
//   'grey-dark': '#70818a',
//   'grey': '#9babb4',
//   'grey-light': '#dae4e9',
//   'grey-lighter': '#f3f7f9',
//   'grey-lightest': '#fafcfc',
//   'white': '#ffffff',
//
//   'red-darkest': '#420806',
//   'red-darker': '#6a1b19',
//   'red-dark': '#cc1f1a',
//   'red': '#e3342f',
//   'red-light': '#ef5753',
//   'red-lighter': '#f9acaa',
//   'red-lightest': '#fcebea',
//
//   'orange-darkest': '#542605',
//   'orange-darker': '#7f4012',
//   'orange-dark': '#de751f',
//   'orange': '#f6993f',
//   'orange-light': '#faad63',
//   'orange-lighter': '#fcd9b6',
//   'orange-lightest': '#fff5eb',
//
//   'yellow-darkest': '#453411',
//   'yellow-darker': '#684f1d',
//   'yellow-dark': '#f2d024',
//   'yellow': '#ffed4a',
//   'yellow-light': '#fff382',
//   'yellow-lighter': '#fff9c2',
//   'yellow-lightest': '#fcfbeb',
//
//   'green-darkest': '#032d19',
//   'green-darker': '#0b4228',
//   'green-dark': '#1f9d55',
//   'green': '#38c172',
//   'green-light': '#51d88a',
//   'green-lighter': '#a2f5bf',
//   'green-lightest': '#e3fcec',
//
//   'teal-darkest': '#0d3331',
//   'teal-darker': '#174e4b',
//   'teal-dark': '#38a89d',
//   'teal': '#4dc0b5',
//   'teal-light': '#64d5ca',
//   'teal-lighter': '#a0f0ed',
//   'teal-lightest': '#e8fffe',
//
//   'blue-darkest': '#05233b',
//   'blue-darker': '#103d60',
//   'blue-dark': '#2779bd',
//   'blue': '#3490dc',
//   'blue-light': '#6cb2eb',
//   'blue-lighter': '#bcdefa',
//   'blue-lightest': '#eff8ff',
//
//   'indigo-darkest': '#191e38',
//   'indigo-darker': '#2f365f',
//   'indigo-dark': '#5661b3',
//   'indigo': '#6574cd',
//   'indigo-light': '#7886d7',
//   'indigo-lighter': '#b2b7ff',
//   'indigo-lightest': '#e6e8ff',
//
//   'purple-darkest': '#1f133f',
//   'purple-darker': '#352465',
//   'purple-dark': '#794acf',
//   'purple': '#9561e2',
//   'purple-light': '#a779e9',
//   'purple-lighter': '#d6bbfc',
//   'purple-lightest': '#f3ebff',
//
//   'pink-darkest': '#45051e',
//   'pink-darker': '#72173a',
//   'pink-dark': '#eb5286',
//   'pink': '#f66d9b',
//   'pink-light': '#fa7ea8',
//   'pink-lighter': '#ffbbca',
//   'pink-lightest': '#ffebef',
// }


var colors = {
	"white": "#FFFFFF",
	"black": "#000000",
	"amber-100": "#FFECB3",
	"amber-200": "#FFE082",
	"amber-300": "#FFD54F",
	"amber-400": "#FFCA28",
	"amber-50": "#FFF8E1",
	"amber-500": "#FFC107",
	"amber-600": "#FFB300",
	"amber-700": "#FFA000",
	"amber-800": "#FF8F00",
	"amber-900": "#FF6F00",
	"amber-A100": "#FFE57F",
	"amber-A200": "#FFD740",
	"amber-A400": "#FFC400",
	"amber-A700": "#FFAB00",
	"blue-100": "#BBDEFB",
	"blue-200": "#90CAF9",
	"blue-300": "#64B5F6",
	"blue-400": "#42A5F5",
	"blue-50": "#E3F2FD",
	"blue-500": "#2196F3",
	"blue-600": "#1E88E5",
	"blue-700": "#1976D2",
	"blue-800": "#1565C0",
	"blue-900": "#0D47A1",
	"blue-A100": "#82B1FF",
	"blue-A200": "#448AFF",
	"blue-A400": "#2979FF",
	"blue-A700": "#2962FF",
	"blue-grey-100": "#CFD8DC",
	"blue-grey-200": "#B0BEC5",
	"blue-grey-300": "#90A4AE",
	"blue-grey-400": "#78909C",
	"blue-grey-50": "#ECEFF1",
	"blue-grey-500": "#607D8B",
	"blue-grey-600": "#546E7A",
	"blue-grey-700": "#455A64",
	"blue-grey-800": "#37474F",
	"blue-grey-900": "#263238",
	"brown-100": "#D7CCC8",
	"brown-200": "#BCAAA4",
	"brown-300": "#A1887F",
	"brown-400": "#8D6E63",
	"brown-50": "#EFEBE9",
	"brown-500": "#795548",
	"brown-600": "#6D4C41",
	"brown-700": "#5D4037",
	"brown-800": "#4E342E",
	"brown-900": "#3E2723",
	"cyan-100": "#B2EBF2",
	"cyan-200": "#80DEEA",
	"cyan-300": "#4DD0E1",
	"cyan-400": "#26C6DA",
	"cyan-50": "#E0F7FA",
	"cyan-500": "#00BCD4",
	"cyan-600": "#00ACC1",
	"cyan-700": "#0097A7",
	"cyan-800": "#00838F",
	"cyan-900": "#006064",
	"cyan-A100": "#84FFFF",
	"cyan-A200": "#18FFFF",
	"cyan-A400": "#00E5FF",
	"cyan-A700": "#00B8D4",
	"deep-orange-100": "#FFCCBC",
	"deep-orange-200": "#FFAB91",
	"deep-orange-300": "#FF8A65",
	"deep-orange-400": "#FF7043",
	"deep-orange-50": "#FBE9E7",
	"deep-orange-500": "#FF5722",
	"deep-orange-600": "#F4511E",
	"deep-orange-700": "#E64A19",
	"deep-orange-800": "#D84315",
	"deep-orange-900": "#BF360C",
	"deep-orange-A100": "#FF9E80",
	"deep-orange-A200": "#FF6E40",
	"deep-orange-A400": "#FF3D00",
	"deep-orange-A700": "#DD2C00",
	"deep-purple-100": "#D1C4E9",
	"deep-purple-200": "#B39DDB",
	"deep-purple-300": "#9575CD",
	"deep-purple-400": "#7E57C2",
	"deep-purple-50": "#EDE7F6",
	"deep-purple-500": "#673AB7",
	"deep-purple-600": "#5E35B1",
	"deep-purple-700": "#512DA8",
	"deep-purple-800": "#4527A0",
	"deep-purple-900": "#311B92",
	"deep-purple-A100": "#B388FF",
	"deep-purple-A200": "#7C4DFF",
	"deep-purple-A400": "#651FFF",
	"deep-purple-A700": "#6200EA",
	"green-100": "#C8E6C9",
	"green-200": "#A5D6A7",
	"green-300": "#81C784",
	"green-400": "#66BB6A",
	"green-50": "#E8F5E9",
	"green-500": "#4CAF50",
	"green-600": "#43A047",
	"green-700": "#388E3C",
	"green-800": "#2E7D32",
	"green-900": "#1B5E20",
	"green-A100": "#B9F6CA",
	"green-A200": "#69F0AE",
	"green-A400": "#00E676",
	"green-A700": "#00C853",
	"grey-100": "#F5F5F5",
	"grey-200": "#EEEEEE",
	"grey-300": "#E0E0E0",
	"grey-400": "#BDBDBD",
	"grey-50": "#FAFAFA",
	"grey-500": "#9E9E9E",
	"grey-600": "#757575",
	"grey-700": "#616161",
	"grey-800": "#424242",
	"grey-900": "#212121",
	"indigo-100": "#C5CAE9",
	"indigo-200": "#9FA8DA",
	"indigo-300": "#7986CB",
	"indigo-400": "#5C6BC0",
	"indigo-50": "#E8EAF6",
	"indigo-500": "#3F51B5",
	"indigo-600": "#3949AB",
	"indigo-700": "#303F9F",
	"indigo-800": "#283593",
	"indigo-900": "#1A237E",
	"indigo-A100": "#8C9EFF",
	"indigo-A200": "#536DFE",
	"indigo-A400": "#3D5AFE",
	"indigo-A700": "#304FFE",
	"light-blue-100": "#B3E5FC",
	"light-blue-200": "#81D4FA",
	"light-blue-300": "#4FC3F7",
	"light-blue-400": "#29B6F6",
	"light-blue-50": "#E1F5FE",
	"light-blue-500": "#03A9F4",
	"light-blue-600": "#039BE5",
	"light-blue-700": "#0288D1",
	"light-blue-800": "#0277BD",
	"light-blue-900": "#01579B",
	"light-blue-A100": "#80D8FF",
	"light-blue-A200": "#40C4FF",
	"light-blue-A400": "#00B0FF",
	"light-blue-A700": "#0091EA",
	"light-green-100": "#DCEDC8",
	"light-green-200": "#C5E1A5",
	"light-green-300": "#AED581",
	"light-green-400": "#9CCC65",
	"light-green-50": "#F1F8E9",
	"light-green-500": "#8BC34A",
	"light-green-600": "#7CB342",
	"light-green-700": "#689F38",
	"light-green-800": "#558B2F",
	"light-green-900": "#33691E",
	"light-green-A100": "#CCFF90",
	"light-green-A200": "#B2FF59",
	"light-green-A400": "#76FF03",
	"light-green-A700": "#64DD17",
	"lime-100": "#F0F4C3",
	"lime-200": "#E6EE9C",
	"lime-300": "#DCE775",
	"lime-400": "#D4E157",
	"lime-50": "#F9FBE7",
	"lime-500": "#CDDC39",
	"lime-600": "#C0CA33",
	"lime-700": "#AFB42B",
	"lime-800": "#9E9D24",
	"lime-900": "#827717",
	"lime-A100": "#F4FF81",
	"lime-A200": "#EEFF41",
	"lime-A400": "#C6FF00",
	"lime-A700": "#AEEA00",
	"orange-100": "#FFE0B2",
	"orange-200": "#FFCC80",
	"orange-300": "#FFB74D",
	"orange-400": "#FFA726",
	"orange-50": "#FFF3E0",
	"orange-500": "#FF9800",
	"orange-600": "#FB8C00",
	"orange-700": "#F57C00",
	"orange-800": "#EF6C00",
	"orange-900": "#E65100",
	"orange-A100": "#FFD180",
	"orange-A200": "#FFAB40",
	"orange-A400": "#FF9100",
	"orange-A700": "#FF6D00",
	"pink-100": "#F8BBD0",
	"pink-200": "#F48FB1",
	"pink-300": "#F06292",
	"pink-400": "#EC407A",
	"pink-50": "#FCE4EC",
	"pink-500": "#E91E63",
	"pink-600": "#D81B60",
	"pink-700": "#C2185B",
	"pink-800": "#AD1457",
	"pink-900": "#880E4F",
	"pink-A100": "#FF80AB",
	"pink-A200": "#FF4081",
	"pink-A400": "#F50057",
	"pink-A700": "#C51162",
	"purple-100": "#E1BEE7",
	"purple-200": "#CE93D8",
	"purple-300": "#BA68C8",
	"purple-400": "#AB47BC",
	"purple-50": "#F3E5F5",
	"purple-500": "#9C27B0",
	"purple-600": "#8E24AA",
	"purple-700": "#7B1FA2",
	"purple-800": "#6A1B9A",
	"purple-900": "#4A148C",
	"purple-A100": "#EA80FC",
	"purple-A200": "#E040FB",
	"purple-A400": "#D500F9",
	"purple-A700": "#AA00FF",
	"red-100": "#FFCDD2",
	"red-200": "#EF9A9A",
	"red-300": "#E57373",
	"red-400": "#EF5350",
	"red-50": "#FFEBEE",
	"red-500": "#F44336",
	"red-600": "#E53935",
	"red-700": "#D32F2F",
	"red-800": "#C62828",
	"red-900": "#B71C1C",
	"red-A100": "#FF8A80",
	"red-A200": "#FF5252",
	"red-A400": "#FF1744",
	"red-A700": "#D50000",
	"teal-100": "#B2DFDB",
	"teal-200": "#80CBC4",
	"teal-300": "#4DB6AC",
	"teal-400": "#26A69A",
	"teal-50": "#E0F2F1",
	"teal-500": "#009688",
	"teal-600": "#00897B",
	"teal-700": "#00796B",
	"teal-800": "#00695C",
	"teal-900": "#004D40",
	"teal-A100": "#A7FFEB",
	"teal-A200": "#64FFDA",
	"teal-A400": "#1DE9B6",
	"teal-A700": "#00BFA5",
	"yellow-100": "#FFF9C4",
	"yellow-200": "#FFF59D",
	"yellow-300": "#FFF176",
	"yellow-400": "#FFEE58",
	"yellow-50": "#FFFDE7",
	"yellow-500": "#FFEB3B",
	"yellow-600": "#FDD835",
	"yellow-700": "#FBC02D",
	"yellow-800": "#F9A825",
	"yellow-900": "#F57F17",
	"yellow-A100": "#FFFF8D",
	"yellow-A200": "#FFFF00",
	"yellow-A400": "#FFEA00",
	"yellow-A700": "#FFD600",
}


module.exports = {

  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },

  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

  fonts: {
    'sans': [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    'serif': [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    'mono': [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ]
  },

  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

  textSizes: {
    'xs': '.75rem',     // 12px
    'sm': '.875rem',    // 14px
    'base': '1rem',     // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },

  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

  fontWeights: {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900,
  },

  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

  leading: {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
  },

  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },

  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

  textColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  |
  */

  backgroundColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },

  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  |
  */

  borderColors: Object.assign({ default: colors['grey-light'] }, colors),

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | Class name: .rounded{-radius?}
  |
  */

  borderRadius: {
    default: '.25rem',
    'sm': '.125rem',
    'lg': '.5rem',
    '2': '2px',
    'full': '9999px',
    'none': '0',
  },

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  |
  */

  width: {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
    'screen': '100vw'
  },

  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  |
  */

  height: {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    'full': '100%',
    'screen': '100vh'
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  |
  */

  minWidth: {
    '0': '0',
    'full': '100%',
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  |
  */

  minHeight: {
    '0': '0',
    'full': '100%',
    'screen': '100vh'
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  |
  */

  maxWidth: {
    'xs': '20rem',
    'sm': '30rem',
    'md': '40rem',
    'lg': '50rem',
    'xl': '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    'full': '100%',
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  |
  */

  maxHeight: {
    'full': '100%',
    'screen': '100vh',
  },

  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  |
  */

  padding: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
  },

  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  |
  */

  margin: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
  },

  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  |
  */

  negativeMargin: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
  },

  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'none': 'none',
  },

  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },

  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  |
  */

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  /*
  |-----------------------------------------------------------------------------
  | Packages
  |-----------------------------------------------------------------------------
  |
  | Here is where you can define the configuration for any Tailwind packages
  | you're using. These can be utility packs, component bundles, or even
  | complete themes. You'll want to reference each package's
  | documentation for a list of settings available for it.
  |
  */

  packages: {
  },

}
