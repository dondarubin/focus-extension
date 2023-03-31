import { classNames } from '~shared/lib/classNames/classNames';
import styles from './Footer.module.scss'
import { FooterButtons } from "./FooterButtons/FooterButtons";

interface FooterProps {
    className?: string;
}

export const Footer = ({className}: FooterProps) => {
    return (
        <div className={classNames(styles.Footer, {}, [className])}>
           <FooterButtons />
        </div>
    );
};