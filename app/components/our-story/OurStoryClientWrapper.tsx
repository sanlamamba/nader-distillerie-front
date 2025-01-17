// @ts-nocheck

'use client'
import {Box, Flex} from "@chakra-ui/react";
import {JourneyTimeline} from "@/app/components/our-story/JourneyTimeLine";
import {Footer} from "@/app/components/footer/Footer";
import {ResponsiveJourneyTimeline} from "@/app/components/our-story/ResponsiveJourneyTimeline";
import Gallery from "@/app/components/our-story/Gallery";

export const OurStoryClientWrapper = ({timelineWithImages, galleryWithImages, brands}) => {

    return (
        <>
            <Flex direction="column" maxWidth="100%" mb={20} overflow="hidden" display={['none', 'flex']}>
                <JourneyTimeline
                    timeline={timelineWithImages}
                />
            </Flex>
            <Flex display={['flex', 'none']} justifyContent={'center'} width={'100%'} p={4}>
                <ResponsiveJourneyTimeline timeline={timelineWithImages}/>
            </Flex>
            <Box position="relative">
                <Gallery images={galleryWithImages}/>
                <Footer brands={brands}/>
            </Box>

        </>
    );
};
