type CenteredTronProps = {
  title: string
  content: string 
  children?: JSX.Element
}

export const CenteredTron = ({title, content, children} : CenteredTronProps) => (
  <div className="mt-5 text-center">
    <h1>{title}</h1>
    <p className="lead">{content}</p>
    {children && children}
  </div>
)