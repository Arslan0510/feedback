export const options = [
    { value: "JUNIOR_DEVELOPER", label: "JUNIOR DEVELOPER" },
    { value: "MID_LEVEL_DEVELOPER", label: "MID LEVEL DEVELOPER" },
    { value: "SENIOR_DEVELOPER", label: "SENIOR DEVELOPER" },
    { value: "TEAM_LEAD", label: "TEAM LEAD" },
];

export const getPhoto = ({ state, setState }) => (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log("🚀 ~ file: index.jsx ~ line 96 ~ getPhoto ~ file", file);
    var regex = new RegExp(
        "([a-zA-Z0-9s_\\.-:])+(.jpg|.JPG|.png|.PNG|.gif|.jpeg|.svg)$"
    );
    if (regex.test(file.name)) {
        reader.onloadend = () => {
            var image = new Image();
            image.src = reader.result;
            image.onload = () => {
                // if (image.width <= 400 && image.height <= 120) {
                setState({ ...state, developerImage: file });
                // }
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert("Wrong file extension...");
    }
};