import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { QRCodeProps, QRCodeV2 } from '.'

const DEFAULT_VALUE = 'https://tryroll.com/'
const DEFAULT_SIZE = 200

const conf = {
  title: titleBuilder.atoms('QRCodeV2'),
  component: QRCodeV2,
}

const Template = ({
  value = DEFAULT_VALUE,
  size = DEFAULT_SIZE,
}: QRCodeProps) => <QRCodeV2 value={value} size={size} />

export const Default = fromTemplate(Template, {
  value: DEFAULT_VALUE,
})
export default conf
