import artExhibitionImage from "../assets/events/art-exhibition.png";
import photographyImage from "../assets/events/photography.png";
import guidedVisitImage from "../assets/events/guided-visit.png";
import workshopImage from "../assets/events/workshop.png";

export const EVENT_IMAGE_OPTIONS = [
  {
    label: "art exhibition",
    value: "art-exhibition",
    image: artExhibitionImage,
  },
  {
    label: "photography",
    value: "photography",
    image: photographyImage,
  },
  {
    label: "guided visit",
    value: "guided-visit",
    image: guidedVisitImage,
  },
  {
    label: "workshop",
    value: "workshop",
    image: workshopImage,
  },
];

export const DEFAULT_EVENT_IMAGE_KEY = EVENT_IMAGE_OPTIONS[0].value;

export const getEventImageByKey = (imageKey) => {
  const selectedImage = EVENT_IMAGE_OPTIONS.find(
    (option) => option.value === imageKey,
  );

  return selectedImage?.image || EVENT_IMAGE_OPTIONS[0].image;
};
