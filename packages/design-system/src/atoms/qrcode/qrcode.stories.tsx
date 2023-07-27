import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { QRCodeProps, QR_Code } from '.'

const DEFAULT_VALUE = 'https://tryroll.com/'
const DEFAULT_SIZE = 200

const conf = {
  title: titleBuilder.atoms('QRCode'),
  component: QR_Code,
}

const Template = ({
  value = DEFAULT_VALUE,
  size = DEFAULT_SIZE,
}: QRCodeProps) => <QR_Code value={value} size={size} />

export const Default = fromTemplate(Template, {
  value: DEFAULT_VALUE,
})
export default conf
