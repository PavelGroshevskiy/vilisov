import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";
import cn from "classnames";

const Header = ({ className, ...props }: HeaderProps) => {
	return (
		<div className={cn(className, styles.header)} {...props}>
			<h1>Todo App</h1>
		</div>
	);
};

export default Header;
