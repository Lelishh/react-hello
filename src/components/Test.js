export default function Test(props) {
    console.log(props);

    return <div></div>;
}

//EXEMPLO DE UTILIZAÇÃO DE PROPS
// <Test number={10}
//       string="Teste"
//       visible
//       data={{a: 1, b: 2}}
//       onClick={() => {
//           console.log('click');
//       }}
// />