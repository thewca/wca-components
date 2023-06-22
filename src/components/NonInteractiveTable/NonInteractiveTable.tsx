import './noninteractivetable.scss'
import { EventId } from '@wca/helpers'
import React from 'react'
import { Table } from 'semantic-ui-react'
import CubingIcon from '../CubingIcon'
import FlagIcon from '../FlagIcon'

interface TableItem {
  text: string
  cssClass?: string
  flag?: string
  cubingIcon?: boolean
  link?: string
}

interface HeaderItem {
  text: string
  cubingIcon?: boolean
}

interface ListProps {
  rows: TableItem[][]
  header: HeaderItem[]
  footer: string[]
}

// TODO: Split this into Registration Table, Results Table, etc.
export default function NonInteractiveTable({
  rows,
  header,
  footer,
}: ListProps) {
  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          {header.map((item) => (
            <Table.HeaderCell key={`header-${item.text}`}>
              {item.cubingIcon ? (
                <CubingIcon event={item.text as EventId} selected={true} />
              ) : (
                item.text
              )}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.length > 0 ? (
          rows.map((items) => (
            <Table.Row key={`row-${items[0].text}`}>
              {items.map((item) => (
                <Table.Cell key={item.text} className={item.cssClass}>
                  {item.flag ? <FlagIcon iso2={item.flag} /> : ''}
                  {item.cubingIcon ? (
                    <CubingIcon event={item.text as EventId} selected={true} />
                  ) : // eslint-disable-next-line unicorn/no-nested-ternary
                  item.link ? (
                    <a href={item.link}>{item.text}</a>
                  ) : (
                    item.text
                  )}
                </Table.Cell>
              ))}
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.Cell width={12}> No matching records found</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
      {footer.length > 0 ? (
        <Table.Footer>
          <Table.Row>
            {footer.map((item) => (
              <Table.Cell key={item}>{item}</Table.Cell>
            ))}
          </Table.Row>
        </Table.Footer>
      ) : (
        ''
      )}
    </Table>
  )
}
