
let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let ahmed = 'Ahmed Yahya'
let ado = 'Adam Marwan'


const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{ahmed}</li>
        <li>{ado}</li>
        

    </ul>
)
ReactDOM.render(element, document.getElementById('content'))
