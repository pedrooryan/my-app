import { Text } from "react-native"

export default function MinMax(props) {

    const { min, max } = props;

    return (
        <Text style={{ fontSize: 30, color:'white' }}>{max} é maior que {min}</Text>
    )
}