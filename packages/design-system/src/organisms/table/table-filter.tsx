import { View } from 'react-native'
import { ButtonV2 } from '../../atoms'
import { useBreakpointValue, useModal } from '../../hooks'
import { ButtonFilters, SelectFilters } from '../../molecules'
import { ModalV2 } from '../modalV2'
import { TableFilterType, TableProps } from './types'

const TableFilter = ({ filter }: Pick<TableProps<unknown, any>, 'filter'>) => {
  const isMobile = useBreakpointValue({
    base: true,
    xl: false,
  })
  const {
    toggle: toggleFilterModal,
    isOpen: isFiltersModalOpen,
    open: openFilterModal,
    close: closeFilterModal,
  } = useModal()

  const filters = (
    <View>
      {filter &&
        (filter.type === TableFilterType.Button ? (
          <ButtonFilters {...filter} />
        ) : (
          <SelectFilters {...filter} />
        ))}
    </View>
  )

  return isMobile ? (
    <>
      <ButtonV2 title="Filter" onPress={openFilterModal} size="large" />
      <ModalV2 isOpen={isFiltersModalOpen} onClose={toggleFilterModal}>
        <ModalV2.Content>
          <ModalV2.Body>{filters}</ModalV2.Body>
          <ModalV2.Footer>
            <ButtonV2
              title="Close"
              variant="secondary"
              onPress={closeFilterModal}
            />
          </ModalV2.Footer>
        </ModalV2.Content>
      </ModalV2>
    </>
  ) : (
    filters
  )
}

export default TableFilter
