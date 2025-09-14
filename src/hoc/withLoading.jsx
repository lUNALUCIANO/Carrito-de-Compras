
 // eslint-disable-next-line no-unused-vars
 export const withLoanding = (Component) =>{
    function ComponetWithLoanding (props){
        if (props.items.length < 1){
            return <div>Cargando Pagina</div>
        }
        return <Component{...props}/>
    }
    return ComponetWithLoanding
}