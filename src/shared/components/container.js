const Container = (props) => {
    return(
        <div className={props.fluid ? 'container-fluid' : 'container'}>
            {props.children}
        </div>
    )
}
export default Container;