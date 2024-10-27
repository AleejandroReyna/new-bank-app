type AppTitleProps = {
  title: string
  children?: JSX.Element
}

export const AppTitle = ({title, children} : AppTitleProps) => (
  <div>
    <h3>{title}</h3>
    {children &&
      <div>{children}</div>
    }
  </div>
)