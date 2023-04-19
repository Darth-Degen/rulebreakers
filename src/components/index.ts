import dynamic from "next/dynamic";

//icons
const SunIcon = dynamic(() => import("./@icons/SunIcon"));
const MoonIcon = dynamic(() => import("./@icons/MoonIcon"));
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const ExchangeIcon = dynamic(() => import("./@icons/ExchangeIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const MenuCloseIcon = dynamic(() => import("./@icons/MenuCloseIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
//atoms
const DropdownButton = dynamic(() => import("./atoms/DropdownButton"));
const DropdownItem = dynamic(() => import("./atoms/DropdownItem"));
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const Button = dynamic(() => import("./atoms/Button"));
const CheckBox = dynamic(() => import("./atoms/CheckBox"));
const LoadAnimation = dynamic(() => import("./atoms/LoadAnimation"));
const LoadCircle = dynamic(() => import("./atoms/LoadCircle"));
const TabBarItem = dynamic(() => import("./atoms/TabBarItem"));
const Underline = dynamic(() => import("./atoms/Underline"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const TextHeader = dynamic(() => import("./atoms/TextHeader"));
const GalleryArrowButton = dynamic(() => import("./atoms/GalleryArrowButton"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const Logo = dynamic(() => import("./molecules/Logo"));
const ThemeChanger = dynamic(() => import("./molecules/ThemeChanger"));
const Dropdown = dynamic(() => import("./molecules/Dropdown"));
const NavItem = dynamic(() => import("./molecules/NavItem"));
const TabBar = dynamic(() => import("./molecules/TabBar"));
const ScrollItem = dynamic(() => import("./molecules/ScrollItem"));
const Modal = dynamic(() => import("./molecules/Modal"));
const Menu = dynamic(() => import("./molecules/Menu"));
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const TabSelector = dynamic(() => import("./molecules/TabSelector"));
const CollabItem = dynamic(() => import("./molecules/CollabItem"));
const ModalContent = dynamic(() => import("./molecules/ModalContent"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const BrkrsLanding = dynamic(() => import("./organisms/BrkrsLanding"));
const Gallery = dynamic(() => import("./organisms/Gallery"));
const GalleryModal = dynamic(() => import("./organisms/GalleryModal"));
const Collabs = dynamic(() => import("./organisms/Collabs"));
const CollabModal = dynamic(() => import("./organisms/CollabModal"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));
const RulebreakersView = dynamic(() => import("./templates/RulebreakersView"));
const AssetsView = dynamic(() => import("./templates/AssetsView"));
const MoreView = dynamic(() => import("./templates/MoreView"));

export {
  PageHead,
  Logo,
  Header,
  Footer,
  PageLayout,
  SunIcon,
  MoonIcon,
  ThemeChanger,
  Dropdown,
  DropdownButton,
  ArrowIcon,
  DropdownItem,
  NumberInput,
  TextInput,
  CheckBox,
  Button,
  LoadAnimation,
  TwitterIcon,
  DiscordIcon,
  LoadCircle,
  ExpIcon,
  MenuIcon,
  NavItem,
  TabBarItem,
  TabBar,
  ScrollItem,
  ExchangeIcon,
  CloseIcon,
  MenuCloseIcon,
  Modal,
  Underline,
  Menu,
  DownloadIcon,
  IconBar,
  BrkrsLanding,
  Gallery,
  SplashScreen,
  LandingView,
  AboutView,
  RulebreakersView,
  ImageShimmer,
  GalleryModal,
  AssetsView,
  TabSelector,
  MoreView,
  TextHeader,
  Collabs,
  CollabItem,
  GalleryArrowButton,
  ModalContent,
  CollabModal
};
