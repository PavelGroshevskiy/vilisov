import React from "react";
import styles from "./InputForm.module.scss";
import { InputFormProps } from "./InputForm.props";

import cn from "classnames";

export const InputForm = ({ className, ...props }: InputFormProps) => {
	return <input className={cn(className, styles.inputForm)} {...props} />;
};
