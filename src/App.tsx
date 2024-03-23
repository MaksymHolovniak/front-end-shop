import Header from "./components/Header/Header.tsx";
import s from './App.module.css'
import {ConfigProvider, Space} from "antd";
function App() {


  return (

    <>
      <main className={s.content}>
          <ConfigProvider
              theme={{
                  components: {
                      Button: {
                          contentFontSize: 16,
                          defaultActiveBg: '#70C05B',
                          borderColorDisabled: '#70C05B',
                          defaultActiveBorderColor: '#70C05B',
                          defaultActiveColor: '#000',
                          defaultHoverBorderColor: '#70C05B',
                          defaultBg: '#70C05B',
                          defaultHoverBg: '#70C05B',
                          defaultBorderColor: '#70C05B',
                          defaultColor: '#000',
                          boxShadow: 'none',
                          defaultShadow: 'none',

                      },
                      Input: {
                          activeBorderColor: '#70C05B',
                          hoverBorderColor: '#70C05B'
                      },
                      Select: {
                          multipleItemBorderColor: '#70C05B',
                          multipleItemBorderColorDisabled: '#70C05B',
                          multipleItemColorDisabled: '#70C05B'
                      }
                  },
              }}
          >
              <Space>
          <Header />
              </Space>
          </ConfigProvider>
      </main>
    </>
  )
}

export default App
