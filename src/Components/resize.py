from PIL import Image
import os

def resize_and_compress_image(input_path, output_path, max_width=None, max_height=None, quality=95):
  """
  Resizes and compresses an image while maintaining quality.

  Args:
    input_path (str): Path to the input image file.
    output_path (str): Path to save the resized and compressed image.
    max_width (int, optional): Maximum desired width in pixels. Defaults to None.
    max_height (int, optional): Maximum desired height in pixels. Defaults to None.
    quality (int, optional): JPEG quality (0-100), higher is better but larger file size. Defaults to 95.

  Raises:
    ValueError: If both max_width and max_height are None.
  """

  if max_width is None and max_height is None:
    raise ValueError("Either max_width or max_height must be provided for resizing.")

  try:
    img = Image.open(input_path)
    width, height = img.size

    # Maintain aspect ratio while resizing
    if max_width and not max_height:
      new_height = int(height * (max_width / width))
      max_height = new_height
    elif max_height and not max_width:
      new_width = int(width * (max_height / height))
      max_width = new_width

    # Resize only if necessary
    if width > max_width or height > max_height:
      img = img.resize((max_width, max_height), Image.ANTIALIAS)  # Use ANTIALIAS for smoother resizing

    # Choose the appropriate file format based on the input image format
    format = img.format.upper()
    if format in ("JPEG", "JPG"):
      output_format = "JPEG"
    elif format in ("PNG"):
      output_format = "PNG"  # PNG already supports lossless compression
    else:
      raise ValueError(f"Unsupported image format: {format}")

    # Compress the image with the specified quality
    img.save(output_path, output_format, quality=quality)

    print(f"Image resized and compressed successfully to: {output_path}")

  except (IOError, OSError) as e:
    print(f"Error processing image: {e}")

# Example usage
input_path = "your_image.jpg"
output_path = "resized_compressed.jpg"  # Specify a new output filename
max_width = 600  # Optional, resize to a maximum width
max_height = 400  # Optional, resize to a maximum height
quality = 90  # Optional, adjust JPEG quality (0-100)

resize_and_compress_image(input_path, output_path, max_width=max_width, max_height=max_height, quality=quality)
