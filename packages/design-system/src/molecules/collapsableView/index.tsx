import { Body, containers, Header, Surface } from '../..'
import ExpandIcon from '../../assets/svg/expandIcon.svg'
import CollapseIcon from '../../assets/svg/collapseIcon.svg'

type Props = {
  title: string
  isExpanded: boolean
  toggle: () => void
  content: React.ReactElement | string
}

const renderContent = (content: React.ReactElement | string) => {
  if (typeof content === 'string') return <Body>{content}</Body>

  return content
}

export const CollapsableView = ({
  title,
  content,
  isExpanded,
  toggle,
}: Props) => {
  return (
    <Surface style={[containers.fullWidth]}>
      <div className="flex flex-col p-8">
        <div className="flex justify-between items-center h-8">
          <Header weight="bold">{title}</Header>
          <button className="w-8 h-8 rounded-full bg-blue-600" onClick={toggle}>
            {isExpanded ? <ExpandIcon /> : <CollapseIcon />}
          </button>
        </div>
        {isExpanded && (
          <div>
            <div className="pt-7 w-full border-b" />
            <div className="flex flex-col pt-7">{renderContent(content)}</div>
          </div>
        )}
      </div>
    </Surface>
  )
}
