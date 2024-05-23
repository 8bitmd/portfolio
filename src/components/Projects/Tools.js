export const Tools = ({tools}) => {
    return (
        tools.map(tool => (<p>{tool}</p>))
    )
}
