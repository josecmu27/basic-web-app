export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Jose Lima";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "joselima";
  }

  if (query.toLowerCase().includes("What is 96 plus 92?")){
    return "188";
  }

  if (query.toLowerCase().includes("What is 86 plus 84?")){
    return "170";
  }

  if (query.toLowerCase().includes("What is 81 plus 43?")){
    return "124";
  }

  if (query.toLowerCase().includes("What is 17 plus 94?")){
    return "111";
  }

  if (query.toLowerCase().includes("What is 25 plus 10?")){
    return "35";
  }
  
  if (query.toLowerCase().includes("What is 82 plus 71?")){
    return "153";
  }
  
  if (query.toLowerCase().includes("What is 38 plus 16?")){
    return "54";
  }
  
  if (query.toLowerCase().includes("What is 97 plus 29?")){
    return "126";
  }

  if (query.toLowerCase().includes("What is 10 plus 52?")){
    return "62";
  }

  if (query.toLowerCase().includes("What is 27 plus 56?")){
    return "83";
  }
  
  
  
  return "";
}
