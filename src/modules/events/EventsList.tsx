import PagesWrapper from "@/components/layout/PagesWrapper";
import ButtonLink from "@/components/ui/buttons/ButtonLink";
import TitleHeader from "@/components/ui/TitleHeader";
import EventCard from "@/modules/events/EventsCard";
import { blogPosts } from "@/data/blogsData";


const EventsPage = () => {
    return (
        <div className="flex flex-col">
            <PagesWrapper>
                <TitleHeader
                    title="Upcoming Events"
                    description="Explore the upcoming events and find something that interests you. You can register for any events you'd like to attend or add new ones that you think others might enjoy. Stay involved and make the most of the opportunities available!"
                />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {blogPosts.map((post, index) => (
                        <EventCard key={index} {...post} />
                    ))}
                </div>

                <div mt-8 text-center>
                    <ButtonLink href="#">Add New Event</ButtonLink>
                </div>
            </PagesWrapper>
        </div>
    );
};

export default EventsPage