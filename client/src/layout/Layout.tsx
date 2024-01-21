import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
		</div>
	);
}

// export const withLayout = <T extends Record<string, unknown>>(
// 	Component: FunctionComponent<T>,
// 	hideSidebar?: boolean
// ) => {
// 	return function withLayoutComponent(props: T) {
// 		return (
// 			<Layout >
// 				<Component {...props} />
// 			</Layout>
// 		);
// 	};
// };
