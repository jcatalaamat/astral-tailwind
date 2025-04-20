// This file mocks React Navigation modules for static site generation
export const useIsFocused = () => true;
export const useNavigation = () => ({
  navigate: () => {},
  goBack: () => {},
  setOptions: () => {},
  addListener: () => () => {},
});
export const useRoute = () => ({ params: {} });
export const useLinkProps = () => ({});
export const useBackButton = () => {};
export default {
  useIsFocused,
  useNavigation,
  useRoute,
  useLinkProps,
  useBackButton
}; 