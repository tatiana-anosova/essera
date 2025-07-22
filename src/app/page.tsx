import styles from './page.module.css';
import { Hero, LookBook, Philosophy } from '@/components';
import clsx from 'clsx';

export default function Home() {
    return (
        <div className={clsx(styles.page)}>
            <main className={clsx(styles.main)}>
                <Hero/>
                <Philosophy />
                <LookBook />
            </main>
        </div>
    );
}
