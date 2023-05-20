import { View } from 'react-native'
import { container } from '../../styles'
import { ButtonV2, TypographyV2 } from '../../atoms'

interface PaginationProps {
  pageCount: number
  pageIndex: number
  pageSize: number
  totalCount: number
  onPrev: () => void
  onNext: () => void
}

const Pagination = ({
  pageCount,
  pageIndex,
  pageSize,
  totalCount,
  onNext,
  onPrev,
}: PaginationProps) => {
  const firstRowIndex = pageIndex * pageSize
  const lastRowIndex = Math.min(firstRowIndex + pageSize, totalCount)
  return (
    <View
      style={[
        container.row,
        container.justifySpaceBetween,
        container.alignCenter,
      ]}
    >
      <TypographyV2 variant="text3">
        Showing {firstRowIndex + 1}-{lastRowIndex} of {totalCount} results
      </TypographyV2>
      <View style={[container.row]}>
        <ButtonV2
          size="medium"
          variant="text"
          title="Prev"
          isDisabled={pageIndex === 0}
          onPress={onPrev}
        />
        <ButtonV2
          size="medium"
          variant="text"
          title="Next"
          isDisabled={pageIndex === pageCount - 1}
          onPress={onNext}
        />
      </View>
    </View>
  )
}

export default Pagination
