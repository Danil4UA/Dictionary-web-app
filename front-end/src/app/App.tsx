import { classNames } from "../shared/lib/classNames/classNames"
import Navbar from "../widgets/Navbar/ui/Navbar"
import Search from "../widgets/Search/Search"
import { useTheme } from "./providers/ThemeProvider"

function App() {
  const {theme,} = useTheme()
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <Search />
    </div>
  )
}

export default App
