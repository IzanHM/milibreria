import { MouseEventHandler } from 'react';
export interface MyFavoriteProps {
    color: 'inherit' | 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavorite(props: MyFavoriteProps): import("react/jsx-runtime").JSX.Element;
export default MyFavorite;
