import theme from 'antd/es/theme'

export const lightTheme = {
  token: {
    colorPrimary: '#70b52b',
    colorInfo: '#70b52b',
    fontSize: 14,
    sizeUnit: 4,
    borderRadius: 10,
    wireframe: false,
    fontFamily: 'Roboto',
    expandable: true,
  },
}

const colors = {
  gray900: '#101828', //
  gray800: '#1D2939', //
  gray700: '#344054', //
  gray600: '#475467', //
  gray500: '#667085', //
  gray400: '#5d6c7b',
  gray300: '#D0D5DD', //
  gray200: '#EAECF0', //
  gray100: '#F2F4F7', //
  gray50: '#F9FAFB', //
  gray25: '#b2c3d5',
  moss800: '#49751C', //
  moss600: '#70B52B', //
  orangedark600: '#E62E05', //
  cubecolor: '#70b52b', //
}

export const darkTheme = {
  token: {
    colorPrimary: '#70b52b', // Основной цвет
    colorSuccess: '#2ecc71', // Цвет успеха
    colorWarning: '#e67e22', // Цвет предупреждения
    colorError: '#e74c3c', // Цвет ошибки
    colorInfo: '#3498db', // Цвет информации
    colorText: colors.gray50, // Основной цвет текста
    colorTextSecondary: colors.gray300, // Вторичный цвет текста
    colorTextTertiary: '#90a1b1', // Третичный цвет текста
    colorTextPlaceholder: colors.gray500, // Цвет текста для заполнителей
    colorTextDisabled: '#5d6c7b', // Цвет отключенного текста
    colorBgBase: colors.gray900, // Основной цвет фона
    colorBgContainer: colors.gray800, // Цвет фона контейнеров
    colorBgLayout: colors.gray900, // Цвет фона для макета
    colorBgElevated: colors.gray800, // Цвет фона для приподнятых элементов
    colorBorder: colors.gray500, // Основной цвет границ
    colorBorderSecondary: colors.gray700, // Вторичный цвет границ
    colorBorderTertiary: colors.gray400, // Третичный цвет границ
    colorLink: colors.gray300, // Цвет ссылок
    colorLinkHover: '#4c5b69', // Цвет ссылок при наведении
    colorLinkActive: colors.gray500, // Цвет активных ссылок
    colorBgSpotlight: colors.gray900, // Цвет фона для выделенных элементов
    colorBgMask: 'rgba(0, 0, 0, 0.5)', // Цвет фона для масок
    colorBgOverlay: 'rgba(0, 0, 0, 0.65)', // Цвет фона для наложений
    colorItemHover: colors.gray600, // Цвет фона для элементов при наведении
    colorItemSelected: '#4c5b69', // Цвет фона для выбранных элементов
    colorItemActive: '#70b52b', // Цвет фона для активных элементов

    fontSize: 14,
    sizeUnit: 4,
    borderRadius: 10,
    wireframe: false,
    fontFamily: 'Roboto',
  },
  algorithm: theme.darkAlgorithm,
}
