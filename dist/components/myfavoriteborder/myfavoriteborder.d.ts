import { MouseEventHandler } from 'react';
export interface MyFavoriteBorderProps {
    color: 'inherit' | 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavoriteBorder(props: MyFavoriteBorderProps): import("react/jsx-runtime").JSX.Element;
export default MyFavoriteBorder;
