// UI Components
import { Stack } from "react-bootstrap"

type AppTitleProps = {
  title: string
  children?: JSX.Element
}

export const AppTitle = ({title, children} : AppTitleProps) => (
  <Stack direction="horizontal" gap={2} className="mt-3">
    <h3>{title}</h3>
      {children &&
      <div className="ms-auto">{children}</div>
    }
  </Stack>
)