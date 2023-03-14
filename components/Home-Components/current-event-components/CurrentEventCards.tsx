import { UserAuth } from "../../../context/AuthContext";
import {
	Card,
	Avatar,
	Text,
	Progress,
	Badge,
	Group,
	ActionIcon,
	createStyles,
	Modal,
} from "@mantine/core";
import { useState } from "react";
import CurrentEventModal from "./CurrentEventModal";

const useStyles = createStyles((theme) => ({
	card: {
		transition: "box-shadow 150ms ease, transform 100ms ease",
		"&:hover": {
			boxShadow: theme.shadows.md,
			transform: "scale(1.05)",
		},
	},
}));

export function CurrentEventsCard({
	setCompletedEvents,
	completedEvents,
	userData,
	user,
	title,
	location,
	group,
	end,
	start,
	event,
	gradeExists,
	setGradeExists,
	currentGrade,
	setCurrentGrade,
}: any) {
	const [openEventModal, setOpenEventModal] = useState(false);

	const goToEvent = () => {
		setOpenEventModal(true);
	};

	const getDateLength = () => {
		const days = end - start + 1;

		return `${days} day${days > 1 ? "s" : ""}`;
	};

	const { classes } = useStyles();

	return (
		<>
			<Modal
				fullScreen
				opened={openEventModal}
				onClose={() => setOpenEventModal(false)}
			>
				<CurrentEventModal
					setCompletedEvents={setCompletedEvents}
					completedEvents={completedEvents}
					userData={userData}
					user={user}
					event={event}
					openEventModal={openEventModal}
          gradeExists={gradeExists}
					setGradeExists={setGradeExists}
					currentGrade={currentGrade}
					setCurrentGrade={setCurrentGrade}
				/>
			</Modal>

			<Card
				withBorder
        // @ts-ignore
				padding="xl"
				radius="md"
				className={classes.card}
				onClick={goToEvent}
			>
				<Group position="apart" p={"sm"}>
					<Text fz="lg" fw={500}>
						{title}
					</Text>
					{/* <Badge>{(end - start) + 1} long</Badge> */}
					<Badge>{getDateLength()}</Badge>
				</Group>

				<Text fz="sm" c="dimmed" mt={5} ml="sm">
					{location + " " + group}
				</Text>
			</Card>
		</>
	);
}
