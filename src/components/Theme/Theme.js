import { useContext } from "react";
import './Theme.css';
import Switch from "react-switch";
import { ThemeContext } from "../../contexts/ThemeContext";



const Theme = () => {
    const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

    return (
        <div id="themeContainer">
            <label>
                <Switch 
                    checked={isDarkTheme}
                    onChange={e => setIsDarkTheme(!isDarkTheme)}
                    offColor='#121212'
                    onColor="#ffffff"
                    offHandleColor="#ffffff"
                    onHandleColor="#121212"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={56}
                    height={28}
                />
            </label>
        </div>
    );
};

export default Theme;