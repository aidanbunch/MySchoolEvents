import React, { useState } from 'react'
import { Center, Pagination, Stack, Text } from '@mantine/core'
import { EventTable } from './EventTable'

const Upcoming = ({ upcomingEvents, setUpcomingEvents, user }: any) => {
  const [page, setPage] = useState(1)
  const [events, setEvents] = useState(upcomingEvents.slice(0, 10))

  const onPaginationChange = (newPage: number) => {
    setPage(newPage)

    if (newPage == 1) return setEvents(upcomingEvents.slice(0, 10))

    setEvents(upcomingEvents.slice(newPage * 10, newPage * 10 + 10))

  }


  return (
    <Stack mih={"100%"}>

      <EventTable events={events} totalEvents={upcomingEvents} setEvents={setUpcomingEvents} user={user} />
      <Center>
        {/* @ts-ignore */}
        <Pagination pos={"fixed"} bottom={30} value={page} onChange={onPaginationChange} total={upcomingEvents.length / 10 - 1} />
      </Center>
    </Stack>
  )
}


export default Upcoming
