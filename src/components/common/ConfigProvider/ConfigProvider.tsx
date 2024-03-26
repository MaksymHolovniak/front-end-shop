import { ConfigProvider } from "antd";
import {FC, ReactNode} from "react";

type PropsType = {
    children: ReactNode
}

const StyledConfigProvider:FC <PropsType> = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBorder: "#70C05B",
                    colorPrimary: "#70C05B",
                    colorPrimaryHover: "#70C05B",
                    borderRadius: 4,
                },
                components: {
                    Button: {
                        contentFontSize: 16,
                        defaultActiveBg: "#70C05B",
                        borderColorDisabled: "#70C05B",
                        defaultActiveBorderColor: "#70C05B",
                        defaultActiveColor: "#000",
                        defaultHoverBorderColor: "#70C05B",
                        defaultBg: "#70C05B",
                        defaultHoverBg: "#70C05B",
                        defaultBorderColor: "#70C05B",
                        defaultColor: "#000",
                        boxShadow: "none",
                        defaultShadow: "none",
                    },
                    Input: {
                        activeBorderColor: "#70C05B",
                        hoverBorderColor: "#70C05B",
                    },
                    Select: {
                        multipleItemBorderColor: "#70C05B",
                        multipleItemBorderColorDisabled: "#70C05B",
                        multipleItemColorDisabled: "#70C05B",
                        multipleItemBg: "#70C05B",
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default StyledConfigProvider;
