import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";

function App() {
    return (
        <div className="title">
            <Info maSV="SV03" lop="TH06" name="Nguyen Van A" age="30" phone="012345645" />
            <Info maSV="SV04" lop="VL09" name="Tran Thanh Hai" age="20" phone="077273119" />
        </div>
    );
}

export default App;
