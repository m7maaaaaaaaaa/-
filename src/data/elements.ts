export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide';

export type MatterState = 'solid' | 'liquid' | 'gas';

export interface ChemicalElement {
  number: number;
  symbol: string;
  nameEn: string;
  nameAr: string;
  atomicMass: number;
  category: ElementCategory;
  state: MatterState;
  electronConfig: string;
  electronegativity: number | null;
  group: number;
  period: number;
  gridRow: number;
  gridCol: number;
}

export const CATEGORY_INFO: Record<
  ElementCategory,
  {
    nameEn: string;
    nameAr: string;
    bgLight: string;
    bgDark: string;
    borderLight: string;
    borderDark: string;
    textLight: string;
    textDark: string;
    dotColor: string;
  }
> = {
  'alkali-metal': {
    nameEn: 'Alkali Metals',
    nameAr: 'الفلزات القلوية',
    bgLight: 'bg-rose-50 hover:bg-rose-100',
    bgDark: 'dark:bg-rose-950/40 dark:hover:bg-rose-900/60',
    borderLight: 'border-rose-300',
    borderDark: 'dark:border-rose-800',
    textLight: 'text-rose-900',
    textDark: 'dark:text-rose-200',
    dotColor: 'bg-rose-500',
  },
  'alkaline-earth-metal': {
    nameEn: 'Alkaline Earth Metals',
    nameAr: 'الفلزات القلوية الأرضية',
    bgLight: 'bg-amber-50 hover:bg-amber-100',
    bgDark: 'dark:bg-amber-950/40 dark:hover:bg-amber-900/60',
    borderLight: 'border-amber-300',
    borderDark: 'dark:border-amber-800',
    textLight: 'text-amber-900',
    textDark: 'dark:text-amber-200',
    dotColor: 'bg-amber-500',
  },
  'transition-metal': {
    nameEn: 'Transition Metals',
    nameAr: 'الفلزات الانتقالية',
    bgLight: 'bg-sky-50 hover:bg-sky-100',
    bgDark: 'dark:bg-sky-950/40 dark:hover:bg-sky-900/60',
    borderLight: 'border-sky-300',
    borderDark: 'dark:border-sky-800',
    textLight: 'text-sky-900',
    textDark: 'dark:text-sky-200',
    dotColor: 'bg-sky-500',
  },
  'post-transition-metal': {
    nameEn: 'Post-Transition Metals',
    nameAr: 'فلزات ما بعد الانتقالية',
    bgLight: 'bg-teal-50 hover:bg-teal-100',
    bgDark: 'dark:bg-teal-950/40 dark:hover:bg-teal-900/60',
    borderLight: 'border-teal-300',
    borderDark: 'dark:border-teal-800',
    textLight: 'text-teal-900',
    textDark: 'dark:text-teal-200',
    dotColor: 'bg-teal-500',
  },
  metalloid: {
    nameEn: 'Metalloids',
    nameAr: 'أشباه الفلزات',
    bgLight: 'bg-emerald-50 hover:bg-emerald-100',
    bgDark: 'dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60',
    borderLight: 'border-emerald-300',
    borderDark: 'dark:border-emerald-800',
    textLight: 'text-emerald-900',
    textDark: 'dark:text-emerald-200',
    dotColor: 'bg-emerald-500',
  },
  'reactive-nonmetal': {
    nameEn: 'Reactive Nonmetals',
    nameAr: 'اللافلزات النشطة',
    bgLight: 'bg-cyan-50 hover:bg-cyan-100',
    bgDark: 'dark:bg-cyan-950/40 dark:hover:bg-cyan-900/60',
    borderLight: 'border-cyan-300',
    borderDark: 'dark:border-cyan-800',
    textLight: 'text-cyan-900',
    textDark: 'dark:text-cyan-200',
    dotColor: 'bg-cyan-500',
  },
  halogen: {
    nameEn: 'Halogens',
    nameAr: 'الهالوجينات',
    bgLight: 'bg-indigo-50 hover:bg-indigo-100',
    bgDark: 'dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60',
    borderLight: 'border-indigo-300',
    borderDark: 'dark:border-indigo-800',
    textLight: 'text-indigo-900',
    textDark: 'dark:text-indigo-200',
    dotColor: 'bg-indigo-500',
  },
  'noble-gas': {
    nameEn: 'Noble Gases',
    nameAr: 'الغازات النبيلة',
    bgLight: 'bg-purple-50 hover:bg-purple-100',
    bgDark: 'dark:bg-purple-950/40 dark:hover:bg-purple-900/60',
    borderLight: 'border-purple-300',
    borderDark: 'dark:border-purple-800',
    textLight: 'text-purple-900',
    textDark: 'dark:text-purple-200',
    dotColor: 'bg-purple-500',
  },
  lanthanide: {
    nameEn: 'Lanthanides',
    nameAr: 'اللانثانيدات',
    bgLight: 'bg-fuchsia-50 hover:bg-fuchsia-100',
    bgDark: 'dark:bg-fuchsia-950/40 dark:hover:bg-fuchsia-900/60',
    borderLight: 'border-fuchsia-300',
    borderDark: 'dark:border-fuchsia-800',
    textLight: 'text-fuchsia-900',
    textDark: 'dark:text-fuchsia-200',
    dotColor: 'bg-fuchsia-500',
  },
  actinide: {
    nameEn: 'Actinides',
    nameAr: 'الأكتينيدات',
    bgLight: 'bg-orange-50 hover:bg-orange-100',
    bgDark: 'dark:bg-orange-950/40 dark:hover:bg-orange-900/60',
    borderLight: 'border-orange-300',
    borderDark: 'dark:border-orange-800',
    textLight: 'text-orange-900',
    textDark: 'dark:text-orange-200',
    dotColor: 'bg-orange-500',
  },
};

export const ELEMENTS: ChemicalElement[] = [
  { number: 1, symbol: 'H', nameEn: 'Hydrogen', nameAr: 'هيدروجين', atomicMass: 1.008, category: 'reactive-nonmetal', state: 'gas', electronConfig: '1s¹', electronegativity: 2.20, group: 1, period: 1, gridRow: 1, gridCol: 1 },
  { number: 2, symbol: 'He', nameEn: 'Helium', nameAr: 'هيليوم', atomicMass: 4.0026, category: 'noble-gas', state: 'gas', electronConfig: '1s²', electronegativity: null, group: 18, period: 1, gridRow: 1, gridCol: 18 },
  { number: 3, symbol: 'Li', nameEn: 'Lithium', nameAr: 'ليثيوم', atomicMass: 6.94, category: 'alkali-metal', state: 'solid', electronConfig: '[He] 2s¹', electronegativity: 0.98, group: 1, period: 2, gridRow: 2, gridCol: 1 },
  { number: 4, symbol: 'Be', nameEn: 'Beryllium', nameAr: 'بيريليوم', atomicMass: 9.0122, category: 'alkaline-earth-metal', state: 'solid', electronConfig: '[He] 2s²', electronegativity: 1.57, group: 2, period: 2, gridRow: 2, gridCol: 2 },
  { number: 5, symbol: 'B', nameEn: 'Boron', nameAr: 'بورون', atomicMass: 10.81, category: 'metalloid', state: 'solid', electronConfig: '[He] 2s² 2p¹', electronegativity: 2.04, group: 13, period: 2, gridRow: 2, gridCol: 13 },
  { number: 6, symbol: 'C', nameEn: 'Carbon', nameAr: 'كربون', atomicMass: 12.011, category: 'reactive-nonmetal', state: 'solid', electronConfig: '[He] 2s² 2p²', electronegativity: 2.55, group: 14, period: 2, gridRow: 2, gridCol: 14 },
  { number: 7, symbol: 'N', nameEn: 'Nitrogen', nameAr: 'نيتروجين', atomicMass: 14.007, category: 'reactive-nonmetal', state: 'gas', electronConfig: '[He] 2s² 2p³', electronegativity: 3.04, group: 15, period: 2, gridRow: 2, gridCol: 15 },
  { number: 8, symbol: 'O', nameEn: 'Oxygen', nameAr: 'أكسجين', atomicMass: 15.999, category: 'reactive-nonmetal', state: 'gas', electronConfig: '[He] 2s² 2p⁴', electronegativity: 3.44, group: 16, period: 2, gridRow: 2, gridCol: 16 },
  { number: 9, symbol: 'F', nameEn: 'Fluorine', nameAr: 'فلور', atomicMass: 18.998, category: 'halogen', state: 'gas', electronConfig: '[He] 2s² 2p⁵', electronegativity: 3.98, group: 17, period: 2, gridRow: 2, gridCol: 17 },
  { number: 10, symbol: 'Ne', nameEn: 'Neon', nameAr: 'نيون', atomicMass: 20.180, category: 'noble-gas', state: 'gas', electronConfig: '[He] 2s² 2p⁶', electronegativity: null, group: 18, period: 2, gridRow: 2, gridCol: 18 },
  { number: 11, symbol: 'Na', nameEn: 'Sodium', nameAr: 'صوديوم', atomicMass: 22.990, category: 'alkali-metal', state: 'solid', electronConfig: '[Ne] 3s¹', electronegativity: 0.93, group: 1, period: 3, gridRow: 3, gridCol: 1 },
  { number: 12, symbol: 'Mg', nameEn: 'Magnesium', nameAr: 'مغنيسيوم', atomicMass: 24.305, category: 'alkaline-earth-metal', state: 'solid', electronConfig: '[Ne] 3s²', electronegativity: 1.31, group: 2, period: 3, gridRow: 3, gridCol: 2 },
  { number: 13, symbol: 'Al', nameEn: 'Aluminum', nameAr: 'ألومنيوم', atomicMass: 26.982, category: 'post-transition-metal', state: 'solid', electronConfig: '[Ne] 3s² 3p¹', electronegativity: 1.61, group: 13, period: 3, gridRow: 3, gridCol: 13 },
  { number: 14, symbol: 'Si', nameEn: 'Silicon', nameAr: 'سيليكون', atomicMass: 28.085, category: 'metalloid', state: 'solid', electronConfig: '[Ne] 3s² 3p²', electronegativity: 1.90, group: 14, period: 3, gridRow: 3, gridCol: 14 },
  { number: 15, symbol: 'P', nameEn: 'Phosphorus', nameAr: 'فوسفور', atomicMass: 30.974, category: 'reactive-nonmetal', state: 'solid', electronConfig: '[Ne] 3s² 3p³', electronegativity: 2.19, group: 15, period: 3, gridRow: 3, gridCol: 15 },
  { number: 16, symbol: 'S', nameEn: 'Sulfur', nameAr: 'كبريت', atomicMass: 32.06, category: 'reactive-nonmetal', state: 'solid', electronConfig: '[Ne] 3s² 3p⁴', electronegativity: 2.58, group: 16, period: 3, gridRow: 3, gridCol: 16 },
  { number: 17, symbol: 'Cl', nameEn: 'Chlorine', nameAr: 'كلور', atomicMass: 35.45, category: 'halogen', state: 'gas', electronConfig: '[Ne] 3s² 3p⁵', electronegativity: 3.16, group: 17, period: 3, gridRow: 3, gridCol: 17 },
  { number: 18, symbol: 'Ar', nameEn: 'Argon', nameAr: 'أرجون', atomicMass: 39.948, category: 'noble-gas', state: 'gas', electronConfig: '[Ne] 3s² 3p⁶', electronegativity: null, group: 18, period: 3, gridRow: 3, gridCol: 18 },
  { number: 19, symbol: 'K', nameEn: 'Potassium', nameAr: 'بوتاسيوم', atomicMass: 39.098, category: 'alkali-metal', state: 'solid', electronConfig: '[Ar] 4s¹', electronegativity: 0.82, group: 1, period: 4, gridRow: 4, gridCol: 1 },
  { number: 20, symbol: 'Ca', nameEn: 'Calcium', nameAr: 'كالسيوم', atomicMass: 40.078, category: 'alkaline-earth-metal', state: 'solid', electronConfig: '[Ar] 4s²', electronegativity: 1.00, group: 2, period: 4, gridRow: 4, gridCol: 2 },
  { number: 21, symbol: 'Sc', nameEn: 'Scandium', nameAr: 'سكانديوم', atomicMass: 44.956, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d¹ 4s²', electronegativity: 1.36, group: 3, period: 4, gridRow: 4, gridCol: 3 },
  { number: 22, symbol: 'Ti', nameEn: 'Titanium', nameAr: 'تيتانيوم', atomicMass: 47.867, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d² 4s²', electronegativity: 1.54, group: 4, period: 4, gridRow: 4, gridCol: 4 },
  { number: 23, symbol: 'V', nameEn: 'Vanadium', nameAr: 'فاناديوم', atomicMass: 50.942, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d³ 4s²', electronegativity: 1.63, group: 5, period: 4, gridRow: 4, gridCol: 5 },
  { number: 24, symbol: 'Cr', nameEn: 'Chromium', nameAr: 'كروم', atomicMass: 51.996, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d⁵ 4s¹', electronegativity: 1.66, group: 6, period: 4, gridRow: 4, gridCol: 6 },
  { number: 25, symbol: 'Mn', nameEn: 'Manganese', nameAr: 'منغنيز', atomicMass: 54.938, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d⁵ 4s²', electronegativity: 1.55, group: 7, period: 4, gridRow: 4, gridCol: 7 },
  { number: 26, symbol: 'Fe', nameEn: 'Iron', nameAr: 'حديد', atomicMass: 55.845, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d⁶ 4s²', electronegativity: 1.83, group: 8, period: 4, gridRow: 4, gridCol: 8 },
  { number: 27, symbol: 'Co', nameEn: 'Cobalt', nameAr: 'كوبالت', atomicMass: 58.933, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d⁷ 4s²', electronegativity: 1.88, group: 9, period: 4, gridRow: 4, gridCol: 9 },
  { number: 28, symbol: 'Ni', nameEn: 'Nickel', nameAr: 'نيكل', atomicMass: 58.693, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d⁸ 4s²', electronegativity: 1.91, group: 10, period: 4, gridRow: 4, gridCol: 10 },
  { number: 29, symbol: 'Cu', nameEn: 'Copper', nameAr: 'نحاس', atomicMass: 63.546, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d¹⁰ 4s¹', electronegativity: 1.90, group: 11, period: 4, gridRow: 4, gridCol: 11 },
  { number: 30, symbol: 'Zn', nameEn: 'Zinc', nameAr: 'خارصين (زنك)', atomicMass: 65.38, category: 'transition-metal', state: 'solid', electronConfig: '[Ar] 3d¹⁰ 4s²', electronegativity: 1.65, group: 12, period: 4, gridRow: 4, gridCol: 12 },
  { number: 31, symbol: 'Ga', nameEn: 'Gallium', nameAr: 'غاليوم', atomicMass: 69.723, category: 'post-transition-metal', state: 'solid', electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹', electronegativity: 1.81, group: 13, period: 4, gridRow: 4, gridCol: 13 },
  { number: 32, symbol: 'Ge', nameEn: 'Germanium', nameAr: 'جرمانيوم', atomicMass: 72.630, category: 'metalloid', state: 'solid', electronConfig: '[Ar] 3d¹⁰ 4s² 4p²', electronegativity: 2.01, group: 14, period: 4, gridRow: 4, gridCol: 14 },
  { number: 33, symbol: 'As', nameEn: 'Arsenic', nameAr: 'زرنيخ', atomicMass: 74.922, category: 'metalloid', state: 'solid', electronConfig: '[Ar] 3d¹⁰ 4s² 4p³', electronegativity: 2.18, group: 15, period: 4, gridRow: 4, gridCol: 15 },
  { number: 34, symbol: 'Se', nameEn: 'Selenium', nameAr: 'سيلينيوم', atomicMass: 78.971, category: 'reactive-nonmetal', state: 'solid', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴', electronegativity: 2.55, group: 16, period: 4, gridRow: 4, gridCol: 16 },
  { number: 35, symbol: 'Br', nameEn: 'Bromine', nameAr: 'بروم', atomicMass: 79.904, category: 'halogen', state: 'liquid', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵', electronegativity: 2.96, group: 17, period: 4, gridRow: 4, gridCol: 17 },
  { number: 36, symbol: 'Kr', nameEn: 'Krypton', nameAr: 'كريبتون', atomicMass: 83.798, category: 'noble-gas', state: 'gas', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶', electronegativity: 3.00, group: 18, period: 4, gridRow: 4, gridCol: 18 },
  { number: 37, symbol: 'Rb', nameEn: 'Rubidium', nameAr: 'روبيديوم', atomicMass: 85.468, category: 'alkali-metal', state: 'solid', electronConfig: '[Kr] 5s¹', electronegativity: 0.82, group: 1, period: 5, gridRow: 5, gridCol: 1 },
  { number: 38, symbol: 'Sr', nameEn: 'Strontium', nameAr: 'سترونشيوم', atomicMass: 87.62, category: 'alkaline-earth-metal', state: 'solid', electronConfig: '[Kr] 5s²', electronegativity: 0.95, group: 2, period: 5, gridRow: 5, gridCol: 2 },
  { number: 39, symbol: 'Y', nameEn: 'Yttrium', nameAr: 'إيتريوم', atomicMass: 88.906, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d¹ 5s²', electronegativity: 1.22, group: 3, period: 5, gridRow: 5, gridCol: 3 },
  { number: 40, symbol: 'Zr', nameEn: 'Zirconium', nameAr: 'زركونيوم', atomicMass: 91.224, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d² 5s²', electronegativity: 1.33, group: 4, period: 5, gridRow: 5, gridCol: 4 },
  { number: 41, symbol: 'Nb', nameEn: 'Niobium', nameAr: 'نيوبيوم', atomicMass: 92.906, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d⁴ 5s¹', electronegativity: 1.6, group: 5, period: 5, gridRow: 5, gridCol: 5 },
  { number: 42, symbol: 'Mo', nameEn: 'Molybdenum', nameAr: 'موليبدينوم', atomicMass: 95.95, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d⁵ 5s¹', electronegativity: 2.16, group: 6, period: 5, gridRow: 5, gridCol: 6 },
  { number: 43, symbol: 'Tc', nameEn: 'Technetium', nameAr: 'تكنيشيوم', atomicMass: 98, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d⁵ 5s²', electronegativity: 1.9, group: 7, period: 5, gridRow: 5, gridCol: 7 },
  { number: 44, symbol: 'Ru', nameEn: 'Ruthenium', nameAr: 'روثينيوم', atomicMass: 101.07, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d⁷ 5s¹', electronegativity: 2.2, group: 8, period: 5, gridRow: 5, gridCol: 8 },
  { number: 45, symbol: 'Rh', nameEn: 'Rhodium', nameAr: 'روديوم', atomicMass: 102.91, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d⁸ 5s¹', electronegativity: 2.28, group: 9, period: 5, gridRow: 5, gridCol: 9 },
  { number: 46, symbol: 'Pd', nameEn: 'Palladium', nameAr: 'بالاديوم', atomicMass: 106.42, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d¹⁰', electronegativity: 2.20, group: 10, period: 5, gridRow: 5, gridCol: 10 },
  { number: 47, symbol: 'Ag', nameEn: 'Silver', nameAr: 'فضة', atomicMass: 107.87, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d¹⁰ 5s¹', electronegativity: 1.93, group: 11, period: 5, gridRow: 5, gridCol: 11 },
  { number: 48, symbol: 'Cd', nameEn: ' Cadmium', nameAr: 'كادميوم', atomicMass: 112.41, category: 'transition-metal', state: 'solid', electronConfig: '[Kr] 4d¹⁰ 5s²', electronegativity: 1.69, group: 12, period: 5, gridRow: 5, gridCol: 12 },
  { number: 49, symbol: 'In', nameEn: 'Indium', nameAr: 'إنديوم', atomicMass: 114.82, category: 'post-transition-metal', state: 'solid', electronConfig: '[Kr] 4d¹⁰ 5s² 5p¹', electronegativity: 1.78, group: 13, period: 5, gridRow: 5, gridCol: 13 },
  { number: 50, symbol: 'Sn', nameEn: 'Tin', nameAr: 'قصدير', atomicMass: 118.71, category: 'post-transition-metal', state: 'solid', electronConfig: '[Kr] 4d¹⁰ 5s² 5p²', electronegativity: 1.96, group: 14, period: 5, gridRow: 5, gridCol: 14 },
  { number: 51, symbol: 'Sb', nameEn: 'Antimony', nameAr: 'أنتيمون', atomicMass: 121.76, category: 'metalloid', state: 'solid', electronConfig: '[Kr] 4d¹⁰ 5s² 5p³', electronegativity: 2.05, group: 15, period: 5, gridRow: 5, gridCol: 15 },
  { number: 52, symbol: 'Te', nameEn: 'Tellurium', nameAr: 'تيلوريوم', atomicMass: 127.60, category: 'metalloid', state: 'solid', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁴', electronegativity: 2.1, group: 16, period: 5, gridRow: 5, gridCol: 16 },
  { number: 53, symbol: 'I', nameEn: 'Iodine', nameAr: 'يود', atomicMass: 126.90, category: 'halogen', state: 'solid', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁵', electronegativity: 2.66, group: 17, period: 5, gridRow: 5, gridCol: 17 },
  { number: 54, symbol: 'Xe', nameEn: 'Xenon', nameAr: 'زينون', atomicMass: 131.29, category: 'noble-gas', state: 'gas', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁶', electronegativity: 2.60, group: 18, period: 5, gridRow: 5, gridCol: 18 },
  { number: 55, symbol: 'Cs', nameEn: 'Cesium', nameAr: 'سيزيوم', atomicMass: 132.91, category: 'alkali-metal', state: 'solid', electronConfig: '[Xe] 6s¹', electronegativity: 0.79, group: 1, period: 6, gridRow: 6, gridCol: 1 },
  { number: 56, symbol: 'Ba', nameEn: 'Barium', nameAr: 'باريوم', atomicMass: 137.33, category: 'alkaline-earth-metal', state: 'solid', electronConfig: '[Xe] 6s²', electronegativity: 0.89, group: 2, period: 6, gridRow: 6, gridCol: 2 },
  { number: 57, symbol: 'La', nameEn: 'Lanthanum', nameAr: 'لانثانوم', atomicMass: 138.91, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 5d¹ 6s²', electronegativity: 1.10, group: 3, period: 6, gridRow: 9, gridCol: 4 },
  { number: 58, symbol: 'Ce', nameEn: 'Cerium', nameAr: 'سيريوم', atomicMass: 140.12, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f¹ 5d¹ 6s²', electronegativity: 1.12, group: 3, period: 6, gridRow: 9, gridCol: 5 },
  { number: 59, symbol: 'Pr', nameEn: 'Praseodymium', nameAr: 'براسيوديميوم', atomicMass: 140.91, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f³ 6s²', electronegativity: 1.13, group: 3, period: 6, gridRow: 9, gridCol: 6 },
  { number: 60, symbol: 'Nd', nameEn: 'Neodymium', nameAr: 'نيوديميوم', atomicMass: 144.24, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f⁴ 6s²', electronegativity: 1.14, group: 3, period: 6, gridRow: 9, gridCol: 7 },
  { number: 61, symbol: 'Pm', nameEn: 'Promethium', nameAr: 'بروميثيوم', atomicMass: 145, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f⁵ 6s²', electronegativity: 1.13, group: 3, period: 6, gridRow: 9, gridCol: 8 },
  { number: 62, symbol: 'Sm', nameEn: 'Samarium', nameAr: 'ساماريوم', atomicMass: 150.36, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f⁶ 6s²', electronegativity: 1.17, group: 3, period: 6, gridRow: 9, gridCol: 9 },
  { number: 63, symbol: 'Eu', nameEn: 'Europium', nameAr: 'يوروبيوم', atomicMass: 151.96, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f⁷ 6s²', electronegativity: 1.2, group: 3, period: 6, gridRow: 9, gridCol: 10 },
  { number: 64, symbol: 'Gd', nameEn: 'Gadolinium', nameAr: 'غادولينيوم', atomicMass: 157.25, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f⁷ 5d¹ 6s²', electronegativity: 1.20, group: 3, period: 6, gridRow: 9, gridCol: 11 },
  { number: 65, symbol: 'Tb', nameEn: 'Terbium', nameAr: 'تيربيوم', atomicMass: 158.93, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f⁹ 6s²', electronegativity: 1.1, group: 3, period: 6, gridRow: 9, gridCol: 12 },
  { number: 66, symbol: 'Dy', nameEn: 'Dysprosium', nameAr: 'ديسبروسيوم', atomicMass: 162.50, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f¹⁰ 6s²', electronegativity: 1.22, group: 3, period: 6, gridRow: 9, gridCol: 13 },
  { number: 67, symbol: 'Ho', nameEn: 'Holmium', nameAr: 'هولميوم', atomicMass: 164.93, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f¹¹ 6s²', electronegativity: 1.23, group: 3, period: 6, gridRow: 9, gridCol: 14 },
  { number: 68, symbol: 'Er', nameEn: 'Erbium', nameAr: 'إربيوم', atomicMass: 167.26, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f¹² 6s²', electronegativity: 1.24, group: 3, period: 6, gridRow: 9, gridCol: 15 },
  { number: 69, symbol: 'Tm', nameEn: 'Thulium', nameAr: 'ثوليوم', atomicMass: 168.93, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f¹³ 6s²', electronegativity: 1.25, group: 3, period: 6, gridRow: 9, gridCol: 16 },
  { number: 70, symbol: 'Yb', nameEn: 'Ytterbium', nameAr: 'إيتربيوم', atomicMass: 173.05, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 6s²', electronegativity: 1.1, group: 3, period: 6, gridRow: 9, gridCol: 17 },
  { number: 71, symbol: 'Lu', nameEn: 'Lutetium', nameAr: 'لوتيشيوم', atomicMass: 174.97, category: 'lanthanide', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d¹ 6s²', electronegativity: 1.27, group: 3, period: 6, gridRow: 9, gridCol: 18 },
  { number: 72, symbol: 'Hf', nameEn: 'Hafnium', nameAr: 'هافنيوم', atomicMass: 178.49, category: 'transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d² 6s²', electronegativity: 1.3, group: 4, period: 6, gridRow: 6, gridCol: 4 },
  { number: 73, symbol: 'Ta', nameEn: 'Tantalum', nameAr: 'تانتالوم', atomicMass: 180.95, category: 'transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d³ 6s²', electronegativity: 1.5, group: 5, period: 6, gridRow: 6, gridCol: 5 },
  { number: 74, symbol: 'W', nameEn: 'Tungsten', nameAr: 'تنغستن', atomicMass: 183.84, category: 'transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d⁴ 6s²', electronegativity: 2.36, group: 6, period: 6, gridRow: 6, gridCol: 6 },
  { number: 75, symbol: 'Re', nameEn: 'Rhenium', nameAr: 'رينيوم', atomicMass: 186.21, category: 'transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d⁵ 6s²', electronegativity: 1.9, group: 7, period: 6, gridRow: 6, gridCol: 7 },
  { number: 76, symbol: 'Os', nameEn: 'Osmium', nameAr: 'أوزميوم', atomicMass: 190.23, category: 'transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d⁶ 6s²', electronegativity: 2.2, group: 8, period: 6, gridRow: 6, gridCol: 8 },
  { number: 77, symbol: 'Ir', nameEn: 'Iridium', nameAr: 'إيريديوم', atomicMass: 192.22, category: 'transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d⁷ 6s²', electronegativity: 2.20, group: 9, period: 6, gridRow: 6, gridCol: 9 },
  { number: 78, symbol: 'Pt', nameEn: 'Platinum', nameAr: 'بلاتين', atomicMass: 195.08, category: 'transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d⁹ 6s¹', electronegativity: 2.28, group: 10, period: 6, gridRow: 6, gridCol: 10 },
  { number: 79, symbol: 'Au', nameEn: 'Gold', nameAr: 'ذهب', atomicMass: 196.97, category: 'transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', electronegativity: 2.54, group: 11, period: 6, gridRow: 6, gridCol: 11 },
  { number: 80, symbol: 'Hg', nameEn: 'Mercury', nameAr: 'زئبق', atomicMass: 200.59, category: 'transition-metal', state: 'liquid', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', electronegativity: 2.00, group: 12, period: 6, gridRow: 6, gridCol: 12 },
  { number: 81, symbol: 'Tl', nameEn: 'Thallium', nameAr: 'ثاليوم', atomicMass: 204.38, category: 'post-transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', electronegativity: 1.62, group: 13, period: 6, gridRow: 6, gridCol: 13 },
  { number: 82, symbol: 'Pb', nameEn: 'Lead', nameAr: 'رصاص', atomicMass: 207.2, category: 'post-transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', electronegativity: 2.33, group: 14, period: 6, gridRow: 6, gridCol: 14 },
  { number: 83, symbol: 'Bi', nameEn: 'Bismuth', nameAr: 'بزموت', atomicMass: 208.98, category: 'post-transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', electronegativity: 2.02, group: 15, period: 6, gridRow: 6, gridCol: 15 },
  { number: 84, symbol: 'Po', nameEn: 'Polonium', nameAr: 'بولونيوم', atomicMass: 209, category: 'post-transition-metal', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', electronegativity: 2.0, group: 16, period: 6, gridRow: 6, gridCol: 16 },
  { number: 85, symbol: 'At', nameEn: 'Astatine', nameAr: 'أستاتين', atomicMass: 210, category: 'halogen', state: 'solid', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', electronegativity: 2.2, group: 17, period: 6, gridRow: 6, gridCol: 17 },
  { number: 86, symbol: 'Rn', nameEn: 'Radon', nameAr: 'رادون', atomicMass: 222, category: 'noble-gas', state: 'gas', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', electronegativity: 2.2, group: 18, period: 6, gridRow: 6, gridCol: 18 },
  { number: 87, symbol: 'Fr', nameEn: 'Francium', nameAr: 'فرانسيوم', atomicMass: 223, category: 'alkali-metal', state: 'solid', electronConfig: '[Rn] 7s¹', electronegativity: 0.7, group: 1, period: 7, gridRow: 7, gridCol: 1 },
  { number: 88, symbol: 'Ra', nameEn: 'Radium', nameAr: 'راديوم', atomicMass: 226, category: 'alkaline-earth-metal', state: 'solid', electronConfig: '[Rn] 7s²', electronegativity: 0.9, group: 2, period: 7, gridRow: 7, gridCol: 2 },
  { number: 89, symbol: 'Ac', nameEn: 'Actinium', nameAr: 'أكتينيوم', atomicMass: 227, category: 'actinide', state: 'solid', electronConfig: '[Rn] 6d¹ 7s²', electronegativity: 1.1, group: 3, period: 7, gridRow: 10, gridCol: 4 },
  { number: 90, symbol: 'Th', nameEn: 'Thorium', nameAr: 'ثوريوم', atomicMass: 232.04, category: 'actinide', state: 'solid', electronConfig: '[Rn] 6d² 7s²', electronegativity: 1.3, group: 3, period: 7, gridRow: 10, gridCol: 5 },
  { number: 91, symbol: 'Pa', nameEn: 'Protactinium', nameAr: 'بروتكتينيوم', atomicMass: 231.04, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f² 6d¹ 7s²', electronegativity: 1.5, group: 3, period: 7, gridRow: 10, gridCol: 6 },
  { number: 92, symbol: 'U', nameEn: 'Uranium', nameAr: 'يورانيوم', atomicMass: 238.03, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f³ 6d¹ 7s²', electronegativity: 1.38, group: 3, period: 7, gridRow: 10, gridCol: 7 },
  { number: 93, symbol: 'Np', nameEn: 'Neptunium', nameAr: 'نبتونيوم', atomicMass: 237, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f⁴ 6d¹ 7s²', electronegativity: 1.36, group: 3, period: 7, gridRow: 10, gridCol: 8 },
  { number: 94, symbol: 'Pu', nameEn: 'Plutonium', nameAr: 'بلوتونيوم', atomicMass: 244, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f⁶ 7s²', electronegativity: 1.28, group: 3, period: 7, gridRow: 10, gridCol: 9 },
  { number: 95, symbol: 'Am', nameEn: 'Americium', nameAr: 'أمريشيوم', atomicMass: 243, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f⁷ 7s²', electronegativity: 1.13, group: 3, period: 7, gridRow: 10, gridCol: 10 },
  { number: 96, symbol: 'Cm', nameEn: 'Curium', nameAr: 'كوريوم', atomicMass: 247, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f⁷ 6d¹ 7s²', electronegativity: 1.28, group: 3, period: 7, gridRow: 10, gridCol: 11 },
  { number: 97, symbol: 'Bk', nameEn: 'Berkelium', nameAr: 'بركليوم', atomicMass: 247, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f⁹ 7s²', electronegativity: 1.3, group: 3, period: 7, gridRow: 10, gridCol: 12 },
  { number: 98, symbol: 'Cf', nameEn: 'Californium', nameAr: 'كاليفورنيوم', atomicMass: 251, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f¹⁰ 7s²', electronegativity: 1.3, group: 3, period: 7, gridRow: 10, gridCol: 13 },
  { number: 99, symbol: 'Es', nameEn: 'Einsteinium', nameAr: 'أينشتاينيوم', atomicMass: 252, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f¹¹ 7s²', electronegativity: 1.3, group: 3, period: 7, gridRow: 10, gridCol: 14 },
  { number: 100, symbol: 'Fm', nameEn: 'Fermium', nameAr: 'فرميوم', atomicMass: 257, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f¹² 7s²', electronegativity: 1.3, group: 3, period: 7, gridRow: 10, gridCol: 15 },
  { number: 101, symbol: 'Md', nameEn: 'Mendelevium', nameAr: 'مندليفيوم', atomicMass: 258, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f¹³ 7s²', electronegativity: 1.3, group: 3, period: 7, gridRow: 10, gridCol: 16 },
  { number: 102, symbol: 'No', nameEn: 'Nobelium', nameAr: 'نوبليوم', atomicMass: 259, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 7s²', electronegativity: 1.3, group: 3, period: 7, gridRow: 10, gridCol: 17 },
  { number: 103, symbol: 'Lr', nameEn: 'Lawrencium', nameAr: 'لورنسيوم', atomicMass: 266, category: 'actinide', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 7s² 7p¹', electronegativity: 1.3, group: 3, period: 7, gridRow: 10, gridCol: 18 },
  { number: 104, symbol: 'Rf', nameEn: 'Rutherfordium', nameAr: 'رذرفورديوم', atomicMass: 267, category: 'transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d² 7s²', electronegativity: null, group: 4, period: 7, gridRow: 7, gridCol: 4 },
  { number: 105, symbol: 'Db', nameEn: 'Dubnium', nameAr: 'دوبنيوم', atomicMass: 268, category: 'transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d³ 7s²', electronegativity: null, group: 5, period: 7, gridRow: 7, gridCol: 5 },
  { number: 106, symbol: 'Sg', nameEn: 'Seaborgium', nameAr: 'سيبورغيوم', atomicMass: 269, category: 'transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d⁴ 7s²', electronegativity: null, group: 6, period: 7, gridRow: 7, gridCol: 6 },
  { number: 107, symbol: 'Bh', nameEn: 'Bohrium', nameAr: 'بوريوم', atomicMass: 270, category: 'transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d⁵ 7s²', electronegativity: null, group: 7, period: 7, gridRow: 7, gridCol: 7 },
  { number: 108, symbol: 'Hs', nameEn: 'Hassium', nameAr: 'هاسيوم', atomicMass: 277, category: 'transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d⁶ 7s²', electronegativity: null, group: 8, period: 7, gridRow: 7, gridCol: 8 },
  { number: 109, symbol: 'Mt', nameEn: 'Meitnerium', nameAr: 'مايتنريوم', atomicMass: 278, category: 'transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d⁷ 7s²', electronegativity: null, group: 9, period: 7, gridRow: 7, gridCol: 9 },
  { number: 110, symbol: 'Ds', nameEn: 'Darmstadtium', nameAr: 'دارمشتاتيوم', atomicMass: 281, category: 'transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d⁸ 7s²', electronegativity: null, group: 10, period: 7, gridRow: 7, gridCol: 10 },
  { number: 111, symbol: 'Rg', nameEn: 'Roentgenium', nameAr: 'رونتجينيوم', atomicMass: 282, category: 'transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d⁹ 7s²', electronegativity: null, group: 11, period: 7, gridRow: 7, gridCol: 11 },
  { number: 112, symbol: 'Cn', nameEn: 'Copernicium', nameAr: 'كوبرنيسيوم', atomicMass: 285, category: 'transition-metal', state: 'liquid', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', electronegativity: null, group: 12, period: 7, gridRow: 7, gridCol: 12 },
  { number: 113, symbol: 'Nh', nameEn: 'Nihonium', nameAr: 'نيهونيوم', atomicMass: 286, category: 'post-transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', electronegativity: null, group: 13, period: 7, gridRow: 7, gridCol: 13 },
  { number: 114, symbol: 'Fl', nameEn: 'Flerovium', nameAr: 'فليروفيوم', atomicMass: 289, category: 'post-transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', electronegativity: null, group: 14, period: 7, gridRow: 7, gridCol: 14 },
  { number: 115, symbol: 'Mc', nameEn: 'Moscovium', nameAr: 'موسكوفيوم', atomicMass: 290, category: 'post-transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', electronegativity: null, group: 15, period: 7, gridRow: 7, gridCol: 15 },
  { number: 116, symbol: 'Lv', nameEn: 'Livermorium', nameAr: 'ليفرموريوم', atomicMass: 293, category: 'post-transition-metal', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', electronegativity: null, group: 16, period: 7, gridRow: 7, gridCol: 16 },
  { number: 117, symbol: 'Ts', nameEn: 'Tennessine', nameAr: 'تينيسين', atomicMass: 294, category: 'halogen', state: 'solid', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', electronegativity: null, group: 17, period: 7, gridRow: 7, gridCol: 17 },
  { number: 118, symbol: 'Og', nameEn: 'Oganesson', nameAr: 'أوغانيسون', atomicMass: 294, category: 'noble-gas', state: 'gas', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', electronegativity: null, group: 18, period: 7, gridRow: 7, gridCol: 18 },
];
