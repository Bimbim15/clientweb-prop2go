export const getCountProperty = async () => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/client/listing/count-property`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data };
    } else {
      const data = await response.json();
      return { success: false, error: data.message };
    }
  } catch (error) {
    return {
      success: false,
      error: "An error occurred while fetching property count.",
    };
  }
};
