import { classNames } from "../shared/lib/classNames/classNames"
import Content from "../widgets/Content/Content/Content"
import Navbar from "../widgets/Navbar/ui/Navbar"
import Search from "../widgets/Search/Search"
import { useTheme } from "./providers/ThemeProvider"

function App() {
  const {theme} = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <Search />
      <Content />
    </div>
  )
}

export default App
