import proptypes from 'prop-types'
import './student.css'

function Student(prop){
    return(
        <div className="student">
            <p>Name: {prop.name}</p>
            <p>Age: {prop.age}</p>
            <p>Studying: {prop.isStudying ? "YES" :"NO"}</p>
        </div>
    );
}

Student.proptypes ={
    name: proptypes.string,
    age: proptypes.number,
    isStudying: proptypes.bool,

}
Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudying : false,
}
export default Student